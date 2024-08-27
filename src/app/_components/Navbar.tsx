"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/images/shopping.png";
import { ModeToggle } from "@/components/example/mode-toogle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/providers/auth-provider";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
	const { user, logout } = useAuth();
	// console.log("navbar:", user);
	return (
		<nav className="w-screen">
			<div className="max-w-7xl mx-auto px-5 lg:px-10 h-[60px] border flex items-center justify-between">
				<Link href={"/"}>
					<div className="flex items-center gap-2">
						<Image src={logo} alt="" className="size-10" />
						<h2 className="font-bold text-base bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-50% inline-block text-transparent bg-clip-text ">
							Shoply
						</h2>
					</div>
				</Link>
				<div>products</div>
				<div className="flex items-center gap-5">
					<ModeToggle />
					{user ? (
						<div className="flex items-center">
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Image
										src={user.image}
										alt="avatar"
										width={100}
										height={100}
										className="size-9 rounded-full border"
									/>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>My Account</DropdownMenuLabel>
									<DropdownMenuSeparator />
									<DropdownMenuItem>
										<Link href="/profile">Profile</Link>
									</DropdownMenuItem>
									<DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					) : (
						<Button variant={"outline"}>
							<Link href={"/login"}>Login</Link>
						</Button>
					)}
				</div>
			</div>
		</nav>
	);
}
