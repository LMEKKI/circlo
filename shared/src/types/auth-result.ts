import { FrontendUser } from "./FrontendUser";
export interface AuthResult {
	user: FrontendUser;
	token?: string;
}
