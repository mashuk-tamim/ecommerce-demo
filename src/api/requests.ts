import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface LoginProps {
	username: string;
	password: string;
}

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const login = ({username, password}:LoginProps) => {
	return axiosInstance.post("/auth/login", {
		username,
		password,
	});
};

// Get user details by user ID
export const getUser = (userId: string) => {
	return axiosInstance.get(`/users/${userId}`);
};

export default axiosInstance;