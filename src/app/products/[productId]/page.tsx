// app/product/[productId]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Updated import
import { Product } from "@/types/product-types";
import { getProductById } from "@/api/requests";
import { ThreeDCard } from "@/app/_components/ThreeDCard";

const ProductDetails = () => {
	const { productId } = useParams() as { productId: string }; // Type assertion to avoid undefined
	const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  
  // console.log(product);  

	useEffect(() => {
		if (productId) {
			const fetchProduct = async () => {
				try {
					const product = await getProductById(productId);
					setProduct(product.data);
				} catch (error) {
					console.error("Failed to fetch product details:", error);
				} finally {
					setLoading(false);
				}
			};

			fetchProduct();
		}
	}, [productId]);

	if (loading) return <p>Loading...</p>;

	if (!product) return <p>Product not found.</p>;

	return (
    <div>
      <ThreeDCard product={product}/>
		</div>
	);
};

export default ProductDetails;
