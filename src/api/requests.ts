import axios from "axios";
import { LOGIN_API, ME_API, PRODUCTS_API,  } from "./endpoint";
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

export const login = ({ username, password }: LoginProps) => {
	const response =  axiosInstance.post(LOGIN_API, {
		username,
		password,
  });
  console.log("this is the response", response);
  return response;
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
  return products.get(PRODUCTS_API)
}

// Get products details
export const getProductById = (id: string) => {
  return productsDetails.get(`products/${id}`);
}

