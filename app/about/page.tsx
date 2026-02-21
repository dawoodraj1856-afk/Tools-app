import React from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
export const metadata = {
  title: "About Our Tools",
  description:
    "All-in-one text, name decoration and conversion tools for social media, games and daily use.",
};

export default function page() {
  return (
    <div className="bg-gray-200">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">About Our Tools Platform</h1>

        <p className="text-gray-600 mb-10 max-w-3xl">
          Welcome to our all-in-one text and name decoration platform. Here you
          can find a complete collection of tools for text analysis, stylish
          name creation, symbols, Arabic and English decorations, and fun
          conversions — all in one place.
        </p>

        {/* Text & Word Tools */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Text & Word Tools</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Number of letters</li>
            <li>Blank text</li>
            <li>Word counter</li>
            <li>Text repetition</li>
            <li>Number spelling</li>
            <li>Alphabetical order</li>
            <li>Flip your name or text</li>
          </ul>
        </section>

        {/* Encoding & Conversion */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Encoding & Conversion Tools
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Binary encoding</li>
            <li>Morse code translator</li>
            <li>Abjad numerology</li>
          </ul>
        </section>

        {/* Name Decoration */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Name Decoration & Styling Tools
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>PUBG name decoration</li>
            <li>English decoration</li>
            <li>Free Fire name decoration</li>
            <li>Facebook name decoration</li>
            <li>Instagram name decoration</li>
            <li>English decoration accepted by Instagram</li>
            <li>Decoration accepted by Facebook</li>
            <li>Random name decoration</li>
          </ul>
        </section>

        {/* Arabic & Islamic */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">
            Arabic & Islamic Decoration Tools
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Ruq&apos;ah script decoration for iPhone</li>
            <li>Decorate yourself in Arabic and English</li>
            <li>Decorating the name Mohamed in English</li>
            <li>Islamic decorative symbols</li>
          </ul>
        </section>

        {/* Symbols & Smileys */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Symbols & Smileys</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Symbols</li>
            <li>Smileys</li>
            <li>Decorative symbols and expressions ready to be copied</li>
          </ul>
        </section>

        {/* Creative */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">
            Creative & Visual Tools
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Decorating and writing names on pictures</li>
          </ul>
        </section>

        <div className="border-t pt-6 text-gray-600 max-w-3xl">
          <p>
            Our mission is to provide simple, fast and easy-to-use tools for
            creating stylish names, analyzing text, generating symbols and
            helping you prepare content for games and social platforms — all
            directly in your browser.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
