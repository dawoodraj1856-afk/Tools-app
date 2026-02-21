import Link from "next/link";
import React from "react";

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
            {[
              "Number of letters",
              "Word counter",
              "Text repetition",
              "Binary encoding",
              "Morse code translator",
              "Abjad numerology",
            ].map((item) => (
              <li
                key={item}
                className="text-gray-600 hover:text-pink-600 transition-colors cursor-default"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Name Decoration */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Name Decoration</h4>
          <ul className="space-y-2">
            {[
              "PUBG name decoration",
              "Free Fire name decoration",
              "Facebook name decoration",
              "Instagram name decoration",
              "English decoration",
              "Random name decoration",
            ].map((item) => (
              <li
                key={item}
                className="text-gray-600 hover:text-pink-600 transition-colors cursor-default"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Symbols & Arabic */}
        <div>
          <h4 className="font-semibold mb-3 text-gray-900">Symbols & Arabic</h4>
          <ul className="space-y-2">
            {[
              "Symbols",
              "Smileys",
              "Islamic decorative symbols",
              "Ruq'ah script decoration",
              "Decorate in Arabic & English",
              "Write names on pictures",
            ].map((item) => (
              <li
                key={item}
                className="text-gray-600 hover:text-pink-600 transition-colors cursor-default"
              >
                {item}
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