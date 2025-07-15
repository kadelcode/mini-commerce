"use client";
import { useSearchParams } from "next/navigation";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
      <p className="text-lg">
        Your order ID is <strong>{orderId}</strong>
      </p>
    </div>
  );
}
