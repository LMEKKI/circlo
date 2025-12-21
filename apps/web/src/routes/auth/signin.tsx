import { createFileRoute } from "@tanstack/react-router";
import { SigninForm } from "../../components/forms/signin-form";

export const Route = createFileRoute("/auth/signin")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<SigninForm />
		</div>
	);
}
