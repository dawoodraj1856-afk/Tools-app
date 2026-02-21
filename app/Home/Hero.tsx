import React from "react";
import Footer from "./Footer";

const letterTools = [
  {
    title: "Number of letters",
    desc: "Count total letters and characters in your text instantly.",
  },
  {
    title: "Blank Text",
    desc: "Check and detect empty or blank text easily.",
  },
  {
    title: "Word Counter",
    desc: "Count words in any sentence or paragraph.",
  },
  {
    title: "Text Repetition",
    desc: "Repeat your text multiple times automatically.",
  },
  {
    title: "Number Spelling",
    desc: "Convert numbers into words spelling format.",
  },
  {
    title: "Alphabetical Order",
    desc: "Sort words and text in alphabetical order.",
  },
  {
    title: "Binary Encoding",
    desc: "Convert your text into binary code.",
  },
  {
    title: "Morse code translator",
    desc: "Translate text into Morse code instantly.",
  },
  {
    title: "Abjad numerology",
    desc: "Calculate Abjad values for Arabic words.",
  },
];

const decorationTools = [
  {
    title: "PUBG name decoration",
    desc: "Create stylish and cool names for PUBG.",
  },
  {
    title: "Free Fire name decoration",
    desc: "Generate unique name styles for Free Fire.",
  },
  {
    title: "Facebook name decoration",
    desc: "Create fancy names that work on Facebook.",
  },
  {
    title: "Instagram name decoration",
    desc: "Generate stylish names for Instagram profiles.",
  },
  {
    title: "Ruq'ah script decoration for iPhone",
    desc: "Create Ruq'ah style decorated Arabic text.",
  },
  {
    title: "English decoration accepted by Instagram",
    desc: "Instagram supported English name styles.",
  },
  {
    title: "Decoration accepted by Facebook",
    desc: "Name styles that work on Facebook safely.",
  },
  {
    title: "Decorating the name Mohamed in English",
    desc: "Special decoration styles for the name Mohamed.",
  },
  {
    title: "Flip your name or text",
    desc: "Flip and reverse your text in a fun style.",
  },
  {
    title: "Decorate yourself in Arabic and English",
    desc: "Decorate your name in both Arabic and English.",
  },
  {
    title: "Decorating and writing names on pictures",
    desc: "Write and decorate names on images easily.",
  },
  {
    title: "Islamic decorative symbols",
    desc: "Copy beautiful Islamic symbols and designs.",
  },
  {
    title: "Random name decoration",
    desc: "Generate random stylish name decorations.",
  },
  {
    title: "Decorative symbols and expressions ready to be copied",
    desc: "Ready-made symbols and expressions to copy.",
  },
  {
    title: "Smileys",
    desc: "Cute smileys and emoji text for your messages.",
  },
];

const Hero = () => {
  return (
    <div className="bg-gray-200">
      <section className="max-w-7xl mx-auto px-4 py-12 ">
        {/* Letters tools */}
        <h1 className="text-2xl font-bold mb-6">Letters Tools</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-12">
          {letterTools.map((tool) => (
            <div
              key={tool.title}
              className="group border rounded-xl p-4 bg-gray-300 hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>

        {/* Decoration tools */}
        <h1 className="text-2xl font-bold mb-6">Decoration Tools</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {decorationTools.map((tool) => (
            <div
              key={tool.title}
              className="group border rounded-xl p-4 bg-gray-300 hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2 group-hover:text-pink-600 transition">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600">{tool.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hero;
