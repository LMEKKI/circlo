export type ErrorType =
	| "VALIDATION" // Erreur Zod (frontend)
	| "AUTH" // Erreur BetterAuth (HTTP 400-499)
	| "NETWORK" // Erreur réseau
	| "SERVER"; // Erreur serveur (HTTP 500+)

// Structure d'erreur standardisée
export interface AppError {
	type: ErrorType;
	message: string; // Message anglais (pour les devs)
	status?: number; // HTTP status (pour les erreurs API)
	field?: string; // Champ en erreur (pour la validation)
	timestamp: string; // Pour le logging
	details?: unknown; // Données brutes pour débogage
}

// Helper pour créer des erreurs
export function createError(
	type: ErrorType,
	message: string,
	options?: Omit<AppError, "type" | "message" | "timestamp">,
): AppError {
	return {
		type,
		message,
		timestamp: new Date().toISOString(),
		...options,
	};
}

// Helpers spécifiques (optionnels mais pratiques)
export function validationError(message: string, field?: string): AppError {
	return createError("VALIDATION", message, { field });
}

export function authError(message: string, status: number): AppError {
	return createError("AUTH", message, { status });
}

export function networkError(message: string = "Network error"): AppError {
	return createError("NETWORK", message);
}

export function serverError(message: string = "Server error"): AppError {
	return createError("SERVER", message);
}
