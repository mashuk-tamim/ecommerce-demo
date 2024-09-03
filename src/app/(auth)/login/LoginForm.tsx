"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { getUser, login } from "@/api/requests";
import { Button } from "@/components/ui/button";
import loginBg from "@/assets/images/loginBg.png";
import { useAuth } from "@/providers/auth-provider";
// import { createSession } from "@/app/actions/sessions";
import axios, { AxiosError } from "axios";
import { LoginUser } from "@/app/actions/login-user";
import LoginButton from "./LoginButton";
import { useToast } from "@/hooks/use-toast";


export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { push } = useRouter();
  const { setUser } = useAuth();
  const { toast } = useToast();
	return (
		<div>
      <form ref={formRef} className="my-8" action={async formData => {
        // formRef.current?.reset(); // this is not a controlled component so ref is used to reset form
        const { error, data } = await LoginUser(formData);
        
        if (error) {
					console.log(error); // Log error to console
          setErrorMessage(typeof error === "string" ? error : "Login failed."); // Set error message
          setError(true);
					toast({
						description: typeof error === "string" ? error : "Login failed.",
					});
          formRef.current?.reset();
          return;
				}

				// Reset error message if login is successful
        setErrorMessage(null);
        // setError(false);
				toast({
					description: "You have successfully logged in.",
				});
				setUser(data);
				push("/");
      }}>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="username">Username</Label>
					<Input id="username" placeholder="" type="username" name="username"/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-8">
					<Label htmlFor="password">Password</Label>
					<Input id="password" placeholder="" type="password" name="password"/>
        </LabelInputContainer>
				<LoginButton/>
        {
          error && <p className="text-xs text-red-500">Login Failed</p>
          
        }
			</form>
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