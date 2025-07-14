"use client";
import { useCart } from "@/store/cart";


export default function CartPage() {
    const { items, updateQty, remove, total } = useCart();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {items.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border">
                            <div>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                              className="w-16 px-2 py-1 border rounded"
                            />
                            <button onClick={() => remove(item.id)} className="text-red-500">Remove</button>
                        </div>
                    ))}
                    <div className="text-right font-bold">Total: ${total().toFixed(2)}</div>
                </div>
            )}
        </div>
    );
}