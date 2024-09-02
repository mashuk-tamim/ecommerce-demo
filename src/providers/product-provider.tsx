import { getProducts } from "@/api/requests";
import { Product, ProductContextType } from "@/types/product-types";
import React, { createContext, ReactNode, useEffect, useState } from "react";


const ProductContext = createContext<ProductContextType | undefined>(undefined);
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const products = await getProducts();
				console.log(products?.data?.products);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
  }, []);
  return (
		<ProductContext.Provider value={{ products, setProducts }}>
			{children}
		</ProductContext.Provider>
	);
}