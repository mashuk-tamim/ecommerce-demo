import Image from "next/image";
import React from "react";
import logo from "@/assets/images/shopping.png"

export default function Navbar() {
	return (
		<nav className="w-screen">
			<div className="max-w-7xl mx-auto px-5 lg:px-10 h-[60px] border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="" className="size-10" />
        </div>
				<div>products</div>
				<div>login</div>
			</div>
		</nav>
	);
}
