import Link from "next/link";

interface Product {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </Link>
  );
}
