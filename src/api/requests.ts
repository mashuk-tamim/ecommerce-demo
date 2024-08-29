import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { loginAPI, meAPI } from "./endpoint";

interface LoginProps {
	username: string;
	password: string;
}

export const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const user = axios.create({
	baseURL: BASE_URL,
});

export const login = ({ username, password }: LoginProps) => {
	return axiosInstance.post(loginAPI, {
		username,
		password,
	});
};

// Get user details by token
export const getUser = (token: string) => {
	return user.get(meAPI, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};
