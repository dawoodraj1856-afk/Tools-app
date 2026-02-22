"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-wide transition-all duration-300 ease-in-out hover:text-pink-600 hover:tracking-wider"
        >
          Tools App
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-pink-600 transition">
            Tools
          </Link>
          <Link href="/about" className="hover:text-pink-600 transition">
            About
          </Link>
          <Link href="/privacy" className="hover:text-pink-600 transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-pink-600 transition">
            Terms
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-4 py-4 text-gray-700 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="block hover:text-pink-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-pink-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="block hover:text-pink-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="block hover:text-pink-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
