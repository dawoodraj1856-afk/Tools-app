"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

// Fancy English text styles for Instagram
const styles = [
  (t: string) => `✧${t}✧`,
  (t: string) => `★${t}★`,
  (t: string) => `✪${t}✪`,
  (t: string) => `ღ${t}ღ`,
  (t: string) => `❂${t}❂`,
  (t: string) => `✵${t}✵`,
  (t: string) => `⚡${t}⚡`,
  (t: string) => `❖${t}❖`,
  (t: string) => `♛${t}♛`,
  (t: string) => `☯️${t}☯️`,
];

// Color options
const colors = [
  "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
  "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
  "#a855f7","#d946ef","#fb7185","#64748b","#000000"
];

export default function EnglishInstaDecoration() {
  const [name, setName] = useState("Dawood");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const results = name ? styles.map(fn => fn(name.trim())) : [];

  const copyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">English Name Decoration for Instagram</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter your name, choose a color, and copy your decorated Instagram name.
        </p>

        {/* Name input */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your Instagram name"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Color selector */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {colors.map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedColor(c)}
              className={`w-8 h-8 rounded-full border-2 transition ${
                selectedColor === c ? "border-gray-900 scale-110" : "border-gray-300"
              }`}
              style={{ backgroundColor: c }}
              aria-label="Select color"
            />
          ))}
        </div>

        {/* Decorated names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-between gap-3 rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <span
                className="select-all text-base font-semibold text-center break-all"
                style={{ color: selectedColor }}
              >
                {item}
              </span>
              <button
                onClick={() => copyText(item, i)}
                className="mt-1 text-xs px-3 py-1.5 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
              >
                {copiedIndex === i ? "Copied!" : "Copy"}
              </button>
            </div>
          ))}

          {!name && (
            <p className="text-sm text-gray-400 col-span-full text-center">
              Type your name to generate decorated styles.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}