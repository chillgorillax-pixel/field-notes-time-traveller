'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-[#39ff14]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-[#39ff14] font-bold text-xl">🦍 Chill Gorilla Universe</Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#39ff14] text-sm font-medium">Home</Link>
            <Link href="/products" className="text-white hover:text-[#39ff14] text-sm font-medium">Products</Link>
            <Link href="/cart" className="text-white hover:text-[#39ff14] text-sm font-medium">Cart</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}