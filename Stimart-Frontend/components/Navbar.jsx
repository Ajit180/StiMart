'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-xl font-bold">
        Stimart
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/products" className="hover:text-blue-600">Products</Link>
        <Link href="/categories" className="hover:text-blue-600">Categories</Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Link href="/cart" className="relative">
          <ShoppingCart />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
        </Link>
        <Link href="/login">
          <User />
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-white shadow-lg rounded p-4 flex flex-col gap-3 md:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
        </div>
      )}
    </nav>
  );
}
