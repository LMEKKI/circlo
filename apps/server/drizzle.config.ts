import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { myenv, type EnvVariables } from "@/server/env";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/db/schema/index.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: myenv.DATABASE_URL as EnvVariables["DATABASE_URL"],
	},
});
