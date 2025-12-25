import type { SignUpType } from "../../../../../../shared/src/types";

export async function signUp(data: SignUpType) {
	try {
		fetch("http://localhost:3000/api/auth/sign-up/email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				password: data.password,
				image: data.image,
				callbackURL: data.callbackURL,
				rememberMe: data.rememberMe,
			}),
		});
	} catch (error) {
		console.error("Error during sign-up:", error);
	}
}
