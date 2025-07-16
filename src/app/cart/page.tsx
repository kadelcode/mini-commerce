"use client";
import { useCart } from "@/store/cart";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, updateQty, remove, total } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/checkout");
  };

  const handleContinueShopping = () => {
    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p>Your cart is empty.</p>
          <button
            onClick={handleContinueShopping}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700
          transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg hover:shadow-md
              transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-100 rounded">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">{item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                  className="w-16 px-2 py-1 border rounded text-center"
                />
                <button
                  onClick={() => remove(item.id)}
                  className="text-red-500 px-3 py-1 hover:text-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Subtotal:</span>
              <span className="text-xl font-bold">${total().toFixed(2)}</span>
            </div>
            <button
              onClick={() => handleCheckout()}
              className="w-full py-3 bg-green-600 text-white font-medium rounded-lg
            hover:bg-green-700 transition-colors"
            >
              Proceed to Checkout
            </button>
            <div className="mt-2 text-center" onClick={handleContinueShopping}>
              <button className="text-blue-600 hover:text-blue-800">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
