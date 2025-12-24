import type { SignInType } from "../../../../../../shared/src/types";
import { authClient } from "../auth-client";

export async function signIn(data: SignInType) {
	fetch("http://localhost:3000/api/auth/sign-in/email", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: data.email,
			password: data.password,
			callbackURL: data.callbackURL,
			rememberMe: data.rememberMe,
		}),
	});

	const response = await authClient.getSession();
	console.log("response", response);
}
