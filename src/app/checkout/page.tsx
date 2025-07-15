"use client";
import { useRouter } from "next/navigation";
import { useCart } from "@/store/cart";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clear } = useCart();
  const currentTotal = total();
  const isCartEmpty = currentTotal === 0;

  const placeOrder = () => {
    if (isCartEmpty) return;

    const orderId = Math.random().toString(36).substring(2, 9);
    router.push(`/success?orderId=${orderId}`);

    // Clear cart only after navigation is initiated
    setTimeout(() => clear(), 0);
  };

  return (
    <div className="max-w-2xl md:max-w-5xl mx-auto text-gray-700">
      <h1 className="text-3xl font-bold mb-6 text-gray-100">Checkout</h1>

      {isCartEmpty ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <p className="text-lg mb-4">Your cart is empty</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Summary Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 pb-2 border-b">
                Order Summary
              </h2>

              <ul className="divide-y">
                {items.map((item) => (
                  <li key={item.id} className="py-4 flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>

              <button
                onClick={placeOrder}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg
            hover:bg-green-700 transition-colors font-medium w-full md:w-auto"
              >
                Place order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
