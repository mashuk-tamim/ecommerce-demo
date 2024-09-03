import axios from "axios";
import { LOGIN_API, ME_API, PRODUCTS_API } from "./endpoint";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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

export const products = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const productsDetails = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const login = async({ username, password }: LoginProps) => {
	try {
		const response = await axiosInstance.post(LOGIN_API, {
			username,
			password,
		});
		// console.log("this is the response", response);
		return response;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Log the Axios error response or message
			console.error("Axios error:", error.response?.data || error.message);

			// Return a standardized error object or value to be handled by the caller
			return { error: error.response?.data || error.message, data: null };
		} else {
			// Handle any non-Axios errors
			console.error("Unexpected error:", error);
			return { error: "An unexpected error occurred.", data: null };
		}
	}
};

// Get user details by token
export const getUser = (token: string) => {
	return user.get(ME_API, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

// Get products
export const getProducts = () => {
	return products.get(PRODUCTS_API);
};

// Get products details
export const getProductById = (id: string) => {
	return products.get(`products/${id}`);
};
