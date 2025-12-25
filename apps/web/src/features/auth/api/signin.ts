import type { SignInType } from "../../../../../../shared/src/types";
import { authClient } from "../auth-client";

export async function signIn(data: SignInType) {
	const { error } = await authClient.signIn.email(
		{
			/**
			 * The user email
			 */
			email: data.email,
			/**
			 * The user password
			 */
			password: data.password,
			/**
			 * A URL to redirect to after the user verifies their email (optional)
			 */
			callbackURL: "/",
			/**
			 * remember the user session after the browser is closed.
			 * @default true
			 */
			rememberMe: data.rememberMe ?? false,
		},
		{
			//callbacks
		},
	);
}
