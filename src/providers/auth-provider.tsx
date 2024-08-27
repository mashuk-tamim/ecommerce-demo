"use client";
import Navbar from "@/app/_components/Navbar";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
	id: string;
	name: string;
	avatar: string;
}

interface AuthContextType {
	user: any;
	setUser: (user: any) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const router = useRouter(); // Initialize useRouter

	const logout = () => {
		setUser(null); // Reset user state
		router.push("/login"); // Redirect to login page
	};

	return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

