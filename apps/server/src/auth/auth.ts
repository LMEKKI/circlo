import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db/index";
import { openAPI } from "better-auth/plugins";
import { user, account, session, verification } from "@/server/db/schema/index";
import { myenv, type EnvVariables } from "../env";

export const auth = betterAuth({
	socialProviders: {
		github: {
			clientId: myenv.GITHUB_CLIENT_ID as EnvVariables["GITHUB_CLIENT_ID"],
			clientSecret:
				myenv.GITHUB_CLIENT_SECRET as EnvVariables["GITHUB_CLIENT_SECRET"],
		},
	},
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: { user, account, session, verification },
	}),

	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
	},
	plugins: [openAPI()],
});
