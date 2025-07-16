"use client";

import { useParams } from "next/navigation";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/store/cart";
import { toast } from "sonner";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { data } = useProducts();
  const addToCart = useCart((state) => state.add);

  const product = data?.find((p) => p.slug === slug);
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-8">
      {/* Image section */}
      <div className="flex flex-col gap-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg h-auto max-h-[500px] object-contain bg-gray-500 p-4"
        />
      </div>

      {/* Info section */}
      <div className="flex flex-col gap-4 max-w-[500px]">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-4 text-gray-700 leading-relaxed">
          {product.description}
        </p>
        <p className="text-2xl font-semibold">${product.price}</p>
        <button
          onClick={() => {
            addToCart({ ...product, quantity: 1 });
            toast.success(`${product.name} added to cart!`);
          }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700
          transition-colors mt-6 font-medium w-full md:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
