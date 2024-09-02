import { NextResponse } from "next/server";
import axios from "axios";
import { createSession } from "@/app/actions/sessions"; // Adjust the import path as needed

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { LOGIN_API, ME_API, PRODUCTS_API,  } from "@/api/endpoint";

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export async function POST(request: Request) {
	const { username, password } = await request.json();

	try {
		// Authenticate the user
		const authResponse = await axiosInstance.post(
			LOGIN_API,
			{
				username,
				password,
			}
		);

		if (!authResponse.data.success) {
			return NextResponse.json(
				{ success: false, error: "Authentication failed" },
				{ status: 401 }
			);
		}

		// Get user data
		const userId = authResponse.data.userId; // Adjust based on your response structure

		// Create session
		await createSession(userId);

		return NextResponse.json({ success: true, userId });
	} catch (error: any) {
		return NextResponse.json(
			{ success: false, error: error.message },
			{ status: 500 }
		);
	}
}
