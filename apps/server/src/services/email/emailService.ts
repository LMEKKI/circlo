import FormData from "form-data";
import Mailgun from "mailgun.js";
import type { BaseEmailData } from "shared/src/types/index.ts";

// Client Mailgun (singleton)
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
	username: "api",
	key: process.env.MAILGUN_API_KEY!,
	// url: process.env.MAILGUN_API_URL, // ex: "https://api.eu.mailgun.net" si EU
});

/**
 * Envoie un email via Mailgun
 * @throws MailgunError si l’envoi échoue
 */
export async function sendEmail(data: BaseEmailData): Promise<void> {
	const { to, subject, text, html } = data;
	try {
		await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
			from: process.env.MAILGUN_FROM_EMAIL!,
			to: [to], // Mailgun attend un tableau
			subject,
			text,
			html, // si fourni, Mailgun utilise HTML
		});
		console.log("Email envoyé avec succès :", data);
	} catch (error: any) {
		console.error(
			"Erreur lors de l’envoi de l’email :",
			error?.message || error,
		);
		throw error;
	}
}
