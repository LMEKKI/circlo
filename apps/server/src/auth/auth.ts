import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db/index";
import { openAPI } from "better-auth/plugins";
import { user, account, session, verification } from "@/server/db/schema/index";

export const auth = betterAuth({
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
