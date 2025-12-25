import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: "http://localhost:3000",
});

// Exporte les méthodes de la même instance
export const { signIn, signUp, useSession } = authClient;
