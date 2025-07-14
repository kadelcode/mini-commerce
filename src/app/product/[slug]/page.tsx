"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/store/cart";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { data } = useProducts();
  const addToCart = useCart((state) => state.add);

  const product = data?.find((p) => p.slug === slug);
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="grid md:grid-colos-2 gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg"
      />
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="text-lg font-semibold mb-6">${product.price}</p>
        <button
          onClick={() => addToCart({ ...product, quantity: 1 })}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
