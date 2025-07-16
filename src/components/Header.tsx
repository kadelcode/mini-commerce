import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-black border-b shadow-sm p-4 mb-6 dark:bg-stone-800 dark:text-gray-300 dark:border-gray-400">
      <nav className="flex justify-between items-center container mx-auto">
        <Link href="/" className="text-xl font-bold">
          Mini-Commerce
        </Link>
        <div className="space-x-4">
          <Link href="/cart">Cart</Link>
          <Link href="/checkout">Checkout</Link>
          {/*<ThemeToggle />*/}
        </div>
      </nav>
    </header>
  );
}
