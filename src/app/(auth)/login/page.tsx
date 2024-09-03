"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { getUser, login } from "@/api/requests";
import { Button } from "@/components/ui/button";
import loginBg from "@/assets/images/loginBg.png";
import { useAuth } from "@/providers/auth-provider";
// import { createSession } from "@/app/actions/sessions";
import axios, { AxiosError } from "axios";
import LoginForm from "./LoginForm";

interface LoginProps {
	username: string;
	password: string;
}

export default function SignupForm() {
	
	return (
		<main className="w-full mx-auto rounded-none md:rounded-2xl px-4 md:px-8 shadow-input bg-white dark:bg-black">
			<div className="flex items-center gap-10">
				<div className="w-[50%] flex justify-center items-center">
					<Image src={loginBg} alt="login background" className="w-[80%]" />
				</div>
				<div className="w-[40%] h-full flex flex-col p-10">
					<h2 className="font-bold text-4xl bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-50% inline-block text-transparent bg-clip-text ">
						Welcome to Shoply
          </h2>
          <LoginForm/>
				</div>
			</div>
		</main>
	);
}


