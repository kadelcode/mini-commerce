import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-white text-orange-600 border-b shadow-sm p-4 mb-6 dark:bg-gray-800 dark:text-blue-400 dark:border-gray-700">
      <nav className="flex justify-between items-center container mx-auto">
        <Link href="/" className="text-xl font-bold">
          Mini-Commerce
        </Link>
        <div className="space-x-4">
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
