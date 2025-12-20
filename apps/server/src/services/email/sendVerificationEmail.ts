/**
 * Génère un email de vérification en HTML inline.
 * @param username Le nom de l'utilisateur
 * @param verificationLink Le lien de vérification contenant le token
 */
export function sendVerificationEmailHtml({
	username,
	verificationLink,
}: {
	username: string;
	verificationLink: string;
}) {
	return `
		<div style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 32px;">
			<div style="max-width: 480px; margin: auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); padding: 32px;">
				<h2 style="color: #222;">Bonjour ${username},</h2>
				<p style="color: #444; font-size: 16px;">Merci de vous être inscrit sur Circlo !</p>
				<p style="color: #444; font-size: 16px;">Pour finaliser votre inscription, veuillez cliquer sur le bouton ci-dessous afin de vérifier votre adresse e-mail :</p>
				<a href="${verificationLink}" style="display: inline-block; margin: 24px 0 8px 0; padding: 12px 28px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 16px;">Vérifier mon adresse e-mail</a>
				<p style="color: #888; font-size: 13px; margin-top: 24px;">Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet e-mail.</p>
			</div>
		</div>
	`;
}
