"use client";
import { cn } from "@/lib/utils";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { CardItem } from "@/components/ui/3d-card";

import { Product } from "@/types/product-types";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BentoGridCardProps {
	product: Product;
}

export function ProductCard({ product }: BentoGridCardProps) {
	const { title, description, thumbnail, brand, category, price, rating, id } =
		product;
	const router = useRouter();
	const handleClick = (id: number) => {
		router.push(`/products/${id}`);
	};
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<Image
					src={thumbnail}
					alt={title || "product image"}
					width={200}
					height={100}
				/>
			</CardContent>
			<div className="p-6">
				<div className="space-y-2">
					<div className="flex justify-between">
						<p className="">Brand: {brand}</p>
						<p className="text-xs border rounded-md px-2 py-1">
							category: {category}
						</p>
					</div>
					<div className="flex justify-between">
						<p>${price}</p>
						<p>rating: {rating}⭐</p>
					</div>
				</div>
				<div className="flex justify-between items-center mt-10">
					<button
						onClick={() => handleClick(id)}
						className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
					>
						view details →
					</button>
					<button className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
						buy now
					</button>
				</div>
			</div>
		</Card>
	);
}
