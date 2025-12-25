import { z } from "zod";
export const signInSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(8, "Password must be at least 8 characters long"),
	callbackURL: z.string().url().optional().nullable(),
	rememberMe: z.boolean().optional().nullable().default(false),
});

export type SignInInput = z.infer<typeof signInSchema>;
