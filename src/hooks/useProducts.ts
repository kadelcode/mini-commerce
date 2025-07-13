"use client";

// Importing useQuery hook for data fetching
import { useQuery } from "@tanstack/react-query";

export type Product = {
  id: string; // Unique identifier for the product
  name: string; // Product name
  slug: string; // URL-friendly identifier
  image: string; // URL or path to product image
  price: number; // Product price
  description: string; // Product description
};

// Custom hook to fetch and manage products data
export const useProducts = () =>
  useQuery<Product[]>({
    // Unique key used for caching, refetching
    queryKey: ["products"],

    // Asynchronous function that fetches the data
    queryFn: async () => {
      const res = await fetch("/data/products.json");
      if (!res.ok) throw new Error("Failed to fetch products");
      return res.json();
    },

    // How long the data stays fresh before becoming stale
    staleTime: 1000 * 60 * 5, // 5 minutes

    // Number of retry attempts if the query fails
    retry: 1,
  });
