import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "../../components/forms/signup-form";

export const Route = createFileRoute("/auth/signup")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<SignupForm />
		</div>
	);
}
