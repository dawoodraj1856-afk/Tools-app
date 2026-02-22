"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const colors = [
  "#ec4899",
  "#ef4444",
  "#f97316",
  "#facc15",
  "#22c55e",
  "#10b981",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#fb7185",
  "#64748b",
  "#000000",
];

export default function LetterCounter() {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const letterCount = text.replace(/\s/g, "").length; // letters only
  const characterCount = text.length; // includes spaces

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Number of Letters Tool</h1>
        <p className="text-sm text-gray-500 mb-6">
          Type any text below to count letters and total characters.
        </p>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          rows={5}
        />

        {/* Color boxes */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedColor(c)}
              className={`w-8 h-8 rounded-full border-2 transition ${
                selectedColor === c
                  ? "border-gray-900 scale-110"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: c }}
              aria-label="Select color"
            />
          ))}
        </div>

        {/* Results */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center"
          style={{ color: selectedColor }}
        >
          <p className="text-lg font-medium">
            Letters (no spaces): <span className="font-bold">{letterCount}</span>
          </p>
          <p className="text-lg font-medium mt-2">
            Total Characters: <span className="font-bold">{characterCount}</span>
          </p>
          <p className="mt-4 text-sm text-gray-500">
            {letterCount === 0 && "Start typing to see the count."}
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}