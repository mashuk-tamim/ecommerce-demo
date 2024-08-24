import Image from "next/image";
import React from "react";
import logo from "@/assets/images/shopping.png"
import { ModeToggle } from "@/components/example/mode-toogle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-screen">
			<div className="max-w-7xl mx-auto px-5 lg:px-10 h-[60px] border flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Image src={logo} alt="" className="size-10" />
					<h2 className="font-bold text-base bg-gradient-to-r from-sky-500 via-30% to-emerald-500 to-50% inline-block text-transparent bg-clip-text ">
						Shoply
					</h2>
				</div>
				<div>products</div>
				<div className="flex items-center gap-2">
					<ModeToggle />
					<Button variant={"outline"}>
						<Link href={"/login"}>Login</Link>
					</Button>
				</div>
			</div>
		</nav>
	);
}
