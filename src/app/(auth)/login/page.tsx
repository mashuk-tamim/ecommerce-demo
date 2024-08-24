"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { login } from "@/api/requests";
import { Button } from "@/components/ui/button";
import loginBg from "@/assets/images/loginBg.png";

interface LoginProps {
	username: string;
	password: string;
}

export default function SignupFormDemo() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(false);
		console.log(username, password);
		const credentials: LoginProps = {
			username: username,
			password: password,
		};
		try {
			const response = await login(credentials);
			console.log("Response:", response.data);
			router.push("/");
		} catch (error) {
			console.error("Error:", error);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		// console.log(router);
	}, [router]);
	return (
		<div className="w-full mx-auto rounded-none md:rounded-2xl px-4 md:px-8 shadow-input bg-white dark:bg-black">
			<div className="flex items-center gap-10">
				<div className="w-[50%] flex justify-center items-center">
					<Image src={loginBg} alt="login background" className="w-[80%]" />
				</div>
				<div className="w-[40%] h-full flex flex-col p-10">
					<h2 className="font-bold text-4xl bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-50% inline-block text-transparent bg-clip-text ">
						Welcome to Shoply
					</h2>
					<form className="my-8 " onSubmit={handleSubmit}>
						<LabelInputContainer className="mb-4">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								placeholder=""
								type="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</LabelInputContainer>
						<LabelInputContainer className="mb-8">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								placeholder=""
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</LabelInputContainer>
						<Button size="lg" type="submit">
							Login &rarr;
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
