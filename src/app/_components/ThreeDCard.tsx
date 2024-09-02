"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import { Product } from "@/types/product-types";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

interface ThreeDCardProps {
	product: Product;
}

export function ThreeDCard({ product }: ThreeDCardProps) {
	const {
		title,
		description,
		thumbnail,
		images,
		brand,
		category,
		price,
		rating,
		id,
	} = product;
	const image = images[0];
	const router = useRouter();
	const handleClick = (id: number) => {
		router.push(`/products/${id}`);
	};
	return (
		<CardContainer className="pt-10 w-[900px]">
			<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border flex gap-5">
				<div className="flex flex-col justify-between">
					<div>
						<CardItem
							translateZ="50"
							className="text-xl font-bold text-neutral-600 dark:text-white"
						>
							{title}
						</CardItem>
						<CardItem
							as="p"
							translateZ="60"
							className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
						>
							{description}
						</CardItem>
						<CardItem translateZ="50" className="space-y-2 pt-5">
							<p className="">Brand: {brand}</p>
							<p className="text-xs">category: {category}</p>
							<p className="text-xl">${price}</p>
							<p>rating: {rating}⭐</p>
						</CardItem>
					</div>
					<div>
						<CardItem
							translateZ={20}
							as="button"
							className="px-4 py-2 mt-4 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
						>
							buy now
						</CardItem>
						<CardItem
							translateZ={20}
							as="button"
							className="px-4 py-2 mt-4 w-full rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
						>
							Delete Product
						</CardItem>
					</div>
				</div>
				<div>
					<CardItem translateZ="100" className="">
						<Image
							src={image}
							height={1000}
							width={1000}
							className="w-[500px] border mx-auto object-fit rounded-xl group-hover/card:shadow-xl"
              alt={title}
              placeholder="empty"
						/>
					</CardItem>
				</div>
			</CardBody>
		</CardContainer>
	);
}
