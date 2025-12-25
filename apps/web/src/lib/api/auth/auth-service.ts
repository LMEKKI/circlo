import { authClient } from "../auth-client";
import type {
	SignInInput,
	SignUpInput,
	AuthResult,
	FrontendUser,
	AppError,
} from "shared";
import {
	createError,
	validationError,
	authError,
	networkError,
	signInSchema,
	serverError,
} from "shared";
import { z } from "zod";

export class AuthService {
	async signIn(input: SignInInput): Promise<AuthResult> {
		try {
			const validated = signInSchema.parse(input);

			const response = await authClient.signIn.email({
				email: validated.email,
				password: validated.password,
				callbackURL: validated.callbackURL || "/",
				rememberMe: validated.rememberMe ?? false,
			});

			if (!response.data?.user) {
				throw new Error("Utilisateur non trouvé dans la réponse API");
			}
			const { id, email, name } = response.data?.user;

			return {
				user: { id, email, name },
			};
		} catch (error) {
			throw await this.transformError(error);
		}
	}

	private async handleAuthError(response: Response): Promise<AppError> {
		let message = `HTTP ${response.status}: ${response.statusText}`;

		try {
			// BetterAuth renvoie du JSON en cas d'erreur métier
			const body = await response.clone().json();
			if (typeof body?.message === "string") {
				message = body.message;

				// Mapping métier pour Circlo (meilleure UX)
				if (response.status === 401 && /invalid/i.test(message)) {
					message = "Email or password incorrect. Please try again.";
				}
				if (response.status === 409 && /exists/i.test(message)) {
					message = "This email is already registered.";
				}
			}
		} catch {}

		return authError(message, response.status);
	}

	private async transformError(error: unknown): Promise<AppError> {
		if (error instanceof z.ZodError) {
			const issue = error.issues[0];
			const field = issue.path.join(".");
			return validationError(issue.message, field);
		}
		if (error instanceof Response) {
			return await this.handleAuthError(error);
		}

		if (error instanceof TypeError && /fetch|network/i.test(error.message)) {
			return networkError("Network error occurred. Please try again.");
		}

		return serverError("An unexpected error occurred. Please try again.");
	}
}
export const authService = new AuthService();
