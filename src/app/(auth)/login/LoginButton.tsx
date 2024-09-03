import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

export default function LoginButton() {
	const { pending } = useFormStatus();
	return (
		<Button size="lg" type="submit" disabled={pending}>
      Login
		</Button>
	);
}
