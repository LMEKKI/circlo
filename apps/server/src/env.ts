import dotenv from "dotenv";
import { z } from "zod";

// Charge le .env à la racine du workspace
dotenv.config({ path: "../../.env" });

const envSchema = z.object({
	BETTER_AUTH_SECRET: z.string().min(16),
	BETTER_AUTH_URL: z.string().url(),
	DATABASE_URL: z.string().url(),
	POSTGRES_DB: z.string(),
	POSTGRES_USER: z.string(),
	POSTGRES_PASSWORD: z.string(),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
	console.error(
		"❌ Invalid or missing environment variables:",
		parsed.error.flatten().fieldErrors,
	);
	process.exit(1);
}

/**
 * Exporté avec as const, TS connaît tous les noms/propriétés à l'autocomplétion.
 * Tu as également le type EnvVariables disponible partout.
 */
export const myenv = parsed.data as Readonly<z.infer<typeof envSchema>>;

export type EnvVariables = typeof myenv;
