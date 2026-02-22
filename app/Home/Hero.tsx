import React from "react";
import Link from "next/link";
import Footer from "./Footer";

const letterTools = [
  {
    title: "Number of letters",
    desc: "Count total letters and characters in your text instantly.",
    href: "/Number-of-letters",
  },
  {
    title: "Blank Text",
    desc: "Check and detect empty or blank text easily.",
    href: "/Blank-Text",
  },
  {
    title: "Word Counter",
    desc: "Count words in any sentence or paragraph.",
    href: "/Word-Counter",
  },
  {
    title: "Text Repetition",
    desc: "Repeat your text multiple times automatically.",
    href: "Text-Repetition",
  },
  {
    title: "Number Spelling",
    desc: "Convert numbers into words spelling format.",
    href: "/Number-Spelling",
  },
  {
    title: "Alphabetical Order",
    desc: "Sort words and text in alphabetical order.",
    href: "/Alphabetical-Order",
  },
  {
    title: "Binary Encoding",
    desc: "Convert your text into binary code.",
    href: "/Binary-Encoding",
  },
  {
    title: "Morse code translator",
    desc: "Translate text into Morse code instantly.",
    href: "/Morse-code-translator",
  },
  {
    title: "Abjad numerology",
    desc: "Calculate Abjad values for Arabic words.",
    href: "/Abjad-numerology",
  },
];

const decorationTools = [
  {
    title: "PUBG name decoration",
    desc: "Create stylish and cool names for PUBG.",
    href: "/pubg-name-decoration",
  },
  {
    title: "Free Fire name decoration",
    desc: "Generate unique name styles for Free Fire.",
    href: "/free-fire-name-decoration",
  },
  {
    title: "Facebook name decoration",
    desc: "Create fancy names that work on Facebook.",
    href: "/facebook-name-decoration",
  },
  {
    title: "Instagram name decoration",
    desc: "Generate stylish names for Instagram profiles.",
    href: "/instagram-name-decoration",
  },
  {
    title: "Ruq'ah script decoration for iPhone",
    desc: "Create Ruq'ah style decorated Arabic text.",
    href: "/ruqah-script-decoration-iphone",
  },
  {
    title: "English decoration accepted by Instagram",
    desc: "Instagram supported English name styles.",
    href: "/english-decoration-instagram",
  },
  {
    title: "Decoration accepted by Facebook",
    desc: "Name styles that work on Facebook safely.",
    href: "/decoration-facebook",
  },
  {
    title: "Decorating the name Mohamed in English",
    desc: "Special decoration styles for the name Mohamed.",
    href: "/mohamed-name-decoration-english",
  },
  {
    title: "Flip your name or text",
    desc: "Flip and reverse your text in a fun style.",
    href: "/flip-text",
  },
  {
    title: "Decorate yourself in Arabic and English",
    desc: "Decorate your name in both Arabic and English.",
    href: "/decorate-arabic-english",
  },
  {
    title: "Decorating and writing names on pictures",
    desc: "Write and decorate names on images easily.",
    href: "/name-on-picture",
  },
  {
    title: "Islamic decorative symbols",
    desc: "Copy beautiful Islamic symbols and designs.",
    href: "/islamic-symbols",
  },
  {
    title: "Random name decoration",
    desc: "Generate random stylish name decorations.",
    href: "/random-name-decoration",
  },
  {
    title: "Decorative symbols and expressions ready to be copied",
    desc: "Ready-made symbols and expressions to copy.",
    href: "/decorative-symbols",
  },
  {
    title: "Smileys",
    desc: "Cute smileys and emoji text for your messages.",
    href: "/z",
  },
];

const Hero = () => {
  return (
    <div className="bg-gray-200">
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold mb-6">Letters Tools</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {letterTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group block border rounded-xl p-4 bg-gray-300 hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </Link>
          ))}
        </div>

        <h1 className="text-2xl font-bold mb-6">Decoration Tools</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {decorationTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group block border rounded-xl p-4 bg-gray-300 hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hero;
