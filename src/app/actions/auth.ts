"use server";

import { getUser, login } from "@/api/requests";
import { useAuth } from "@/providers/auth-provider";
import axios from "axios"; 
import { createSession } from "./sessions";
import { redirect } from "next/navigation";

export const LoginUser = async (formData: FormData) => {

	const username = formData.get("username");
	const password = formData.get("password");

	const payload = {
		username: username as string,
		password: password as string,
	};

	try {
		const response = await login(payload);
		console.log("Response:", response?.data);

		const token = response?.data?.token;
		const user = await getUser(token);
    console.log("User Data:", user?.data);
    
    await createSession(user?.data?.id);

		// Return success data
		return { error: null, data: user?.data };
	} catch (e) {
		if (axios.isAxiosError(e)) {
			// Handle Axios errors if any somehow reach here
			console.error("Axios error in LoginUser:", e.response?.data || e.message);
			return { error: e.response?.data || e.message, data: null };
		} else {
			// Handle unexpected errors
			console.error("Unexpected error in LoginUser:", e);
			return { error: "An unexpected error occurred.", data: null };
		}
	}
};

export async function logout() {
  // deleteSession();
  console.log("delete session")
	redirect("/login");
}
