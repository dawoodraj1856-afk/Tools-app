import Link from "next/link";

const Header = () => {
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

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-700">
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
      </div>
    </header>
  );
};

export default Header;
