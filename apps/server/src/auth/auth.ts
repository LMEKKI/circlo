import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db/index";
import { openAPI } from "better-auth/plugins";
import { user, account, session, verification } from "@/server/db/schema/index";
import { myenv, type EnvVariables } from "@/server/env";
import { sendEmail } from "@/server/services/email/emailService";
import { sendResetPasswordEmailHtml } from "@/server/services/email/sendResetPasswordEmail";
import { sendVerificationEmailHtml } from "@/server/services/email/sendVerificationEmail";

export const auth = betterAuth({
	emailVerification: {
		sendVerificationEmail: async ({ user, url, token }, request) => {
			// Implémentez l’envoi d’email ici, par ex. avec sendEmail()
			await sendEmail({
				to: user.email!,
				subject: "Vérifiez votre adresse email",
				text: `Veuillez vérifier votre adresse email en cliquant sur le lien suivant : ${url}`,
				html: sendVerificationEmailHtml({
					username: user.name,
					verificationLink: url,
				}),
			});
		},
	},
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

		disableSignUp: false,
		minPasswordLength: 8,
		maxPasswordLength: 128,
		autoSignIn: true,

		sendResetPassword: async ({ user, url }) => {
			await sendEmail({
				to: user.email!,
				subject: "Vérifiez votre adresse email",
				text: `Veuillez vérifier votre adresse email en cliquant sur le lien suivant : ${url}`,
				html: sendResetPasswordEmailHtml({
					username: user.name,
					resetLink: url,
				}),
			});
		},
	},
	plugins: [openAPI()],
});
