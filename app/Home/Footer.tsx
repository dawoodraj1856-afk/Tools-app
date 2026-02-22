import Link from "next/link";
import React from "react";

const textEncodingLinks = [
  { label: "Number of letters", href: "/Number-of-letters" },
  { label: "Word counter", href: "/Word-Counter" },
  { label: "Text repetition", href: "/Text-Repetition" },
  { label: "Binary encoding", href: "/Binary-Encoding" },
  { label: "Morse code translator", href: "/Morse-Code-translator" },
  { label: "Abjad numerology", href: "/Abjad-numerology" },
];

const nameDecorationLinks = [
  { label: "PUBG name decoration", href: "/pubg-name-decoration" },
  { label: "Free Fire name decoration", href: "/free-fire-name-decoration" },
  { label: "Facebook name decoration", href: "/facebook-name-decoration" },
  { label: "Instagram name decoration", href: "/instagram-name-decoration" },
  { label: "English decoration", href: "/decorate-arabic-english" },
  { label: "Random name decoration", href: "/random-name-decoration" },
];

const symbolsArabicLinks = [
  { label: "Symbols", href: "/decorative-symbols" },
  { label: "Smileys", href: "/smileys" },
  { label: "Islamic decorative symbols", href: "/islamic-symbols" },
  {
    label: "Ruq'ah script decoration",
    href: "/ruqah-script-decoration-iphone",
  },
  {
    label: "Decorating the name Mohamed in English",
    href: "/mohamed-name-decoration-english",
  },
  { label: "Write names on pictures", href: "/name-on-picture" },
];

const Footer = () => {
  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">
            Tools Platform
          </h3>
          <p className="text-gray-600 leading-relaxed">
            A simple and powerful collection of text, name decoration, symbols,
            Arabic and English styling tools for social media, games and daily
            use.
          </p>
        </div>

        {/* Text & Encoding */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Text & Encoding</h4>
          <ul className="space-y-2">
            {textEncodingLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Name Decoration */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Name Decoration</h4>
          <ul className="space-y-2">
            {nameDecorationLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Symbols & Arabic */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Symbols & Arabic</h4>
          <ul className="space-y-2">
            {symbolsArabicLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-2 justify-between text-xs text-gray-500">
          <p className="hover:text-gray-700 transition-colors">
            © {new Date().getFullYear()} Tools Platform. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              href="/about"
              className="hover:text-pink-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="hover:text-pink-600 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-pink-600 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
