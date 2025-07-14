"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";

export default function CataloguePage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
