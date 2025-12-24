export type BaseEmailData = {
	to: string;
	subject: string;
	text: string;
	html: string;
};

export type SignUpType = {
	name: string;
	email: string;
	password: string;
	image?: string;
	callbackURL?: string;
	rememberMe?: boolean;
};
