import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the type for a single cart item
type CartItem = {
    id: string;         // Unique identifier for the product
    name: string;       // Product name
    price: number;      // Product price
    quantity: number;   // Quantity in cart
    image: string;      // Product image URL
};

// Define the type for the cart state and its methods
type CartState = {
    items: CartItem[];  // Array of cart items
    add: (item: CartItem) => void;  // Add item to cart
    remove: (id: string) => void;   // Remove item by ID
    updateQty: (id: string, qty: number) => void;   // Update item quantity
    clear: () => void;  // Clear all items from cart
    total: () => number;    // Calculate total cart value
};


// Create the cart store with persistence
export const useCart = create<CartState>()(
    persist(
        // Store definition with state and actions
        (set, get) => ({
            items: [],  // Initial empty cart

            // Add item to cart or update quantity if already exists
            add: (item) => {
                const existing = get().items.find((i) => i.id === item.id);
                if (existing) {
                    set({
                        items: get().items.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
                        ),
                    });
                } else {
                    // If new item, add to cart
                    set({ items: [...get().items, item] });
                }
            },

            // Remove item from cart by ID
            remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),

            // Update quantity of specific item
            updateQty: (id, qty) =>
                set({
                    items: get().items.map((i) =>
                        i.id === id ? { ...i, quantity: qty } : i
                    ),
                }),
            
            // Clear all items from cart
            clear: () => set({ items: [] }),

            // Calculate total cart value (sum of price*quantity for all items)
            total: () =>
                get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
        }),

        // Persist configuration
        { 
            name: 'mini-cart' // Key to use for localStorage persistence
        }
    )
);