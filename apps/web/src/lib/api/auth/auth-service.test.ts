// apps/web/src/lib/api/auth/auth-service.test.ts
import { describe, it, expect, vi } from "vitest";
import { authService } from "./auth-service";
import type { AppError } from "@shared/auth/errors";

// Mock authClient pour éviter les appels réels
vi.mock("../auth-client", () => ({
	authClient: {
		signIn: {
			email: vi.fn(),
		},
	},
}));

describe("AuthService.signIn", () => {
	it("throws VALIDATION error when email is invalid", async () => {
		// 1. On appelle signIn avec des données invalides
		const invalidInput = {
			email: "not-an-email",
			password: "short",
			rememberMe: false,
			callbackURL: "/",
		};

		// 2. On s'attend à ce qu'une erreur soit lancée
		try {
			await authService.signIn(invalidInput);
			expect.unreachable("Should have thrown");
		} catch (error) {
			// 3. On vérifie que c'est bien une AppError
			const appError = error as AppError;

			expect(appError.type).toBe("VALIDATION");
			expect(appError.field).toBe("email");
			expect(appError.message).toBe("Invalid email format");
		}
	});
});
