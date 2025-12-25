import { authClient } from "@/lib/api/auth-client";
import { redirect } from "@tanstack/react-router";
const { data: session } = await authClient.getSession();

export async function requireAuth() {
	if (session?.user.id == null) {
		console.log("session", session);

		throw redirect({ to: "/auth/signin" });
	}

	return session.user.id;
}
