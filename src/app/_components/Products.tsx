"use client";

import { getProducts } from "@/api/requests";
import { Product } from "@/types/product-types";
import React, { useEffect, useState } from "react";
import { ThreeDCard } from "./ThreeDCard";
import { ProductCard } from "./ProductCard";


export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        const products = productsData?.data?.products;
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5 p-10">
      {products.map((product, idx) => (
        // <ThreeDCard product={product} key={product.id}/>
        <ProductCard product={product} key={product.id}/>
      ))}
		</div>
	);
}
