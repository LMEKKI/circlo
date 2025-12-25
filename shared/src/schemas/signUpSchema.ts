import { z } from "zod";

export const signUpSchema = z.object({
	name: z.string().min(1, "Name must be at least 1 character long"),
	email: z.string().email("Invalid email address"),
	password: z
		.string()
		.min(
			8,
			"Password must be at least 8 characters long ,  12 characters long is better",
		),
	image: z.string().url("Invalid image URL").optional().nullable(),
	callbackURL: z.string().url().optional().nullable(),
	rememberMe: z.boolean().optional().nullable().default(false),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
