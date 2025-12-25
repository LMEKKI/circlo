import { requireAuth } from "@/middlewares/requireAuth";
import { createFileRoute, redirect } from "@tanstack/react-router";

// src/routes/_authenticated.tsx
export const Route = createFileRoute("/_authenticated")({
	beforeLoad: async (useLocation) => {
		if (!(await requireAuth())) {
			throw redirect({
				to: "/auth/signin",
				search: {
					// Use the current location to power a redirect after login
					// (Do not use `router.state.resolvedLocation` as it can
					// potentially lag behind the actual current location)
					redirect: useLocation.location.href,
				},
			});
		}
	},
});
