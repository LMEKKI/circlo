import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({ path: "../../.env" });

const envSchema = z.object({
	BETTER_AUTH_SECRET: z.string().min(16),
	BETTER_AUTH_URL: z.string().url(),
	DATABASE_URL: z.string().url(),
	POSTGRES_DB: z.string(),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
	GITHUB_CLIENT_ID: z.string(),
	GITHUB_CLIENT_SECRET: z.string(),
	MAILGUN_API_KEY: z.string(),
	MAILGUN_DOMAIN: z.string(),
	MAILGUN_BASE_URL: z.url(),
	MAILGUN_FROM_EMAIL: z.string(),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
	console.error("Invalid or missing environment variables:", parsed.error);
	process.exit(1);
}

export const myenv = parsed.data as Readonly<z.infer<typeof envSchema>>;

export const MAILGUN_API_KEY = myenv.MAILGUN_API_KEY;
export const MAILGUN_DOMAIN = myenv.MAILGUN_DOMAIN;
export const MAILGUN_BASE_URL = myenv.MAILGUN_BASE_URL;
export const MAILGUN_FROM_EMAIL = myenv.MAILGUN_FROM_EMAIL;

export type EnvVariables = typeof myenv;
