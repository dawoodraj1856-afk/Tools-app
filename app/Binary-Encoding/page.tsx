"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function BinaryEncoding() {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [copied, setCopied] = useState(false);

  const colors = [
    "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
    "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
    "#a855f7","#d946ef","#fb7185","#64748b","#000000",
  ];

  // Convert text to binary
  const binaryText = text
    ? text
        .split("")
        .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ")
    : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(binaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Binary Encoding Tool</h1>
        <p className="text-sm text-gray-500 mb-6">
          Type your text below to see its binary encoding. You can also copy the result.
        </p>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          rows={4}
        />

        {/* Color selector */}
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

        {/* Binary output */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center break-words"
          style={{ color: selectedColor }}
        >
          {binaryText ? (
            <>
              <p className="text-sm font-medium">{binaryText}</p>
              <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-600 transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">Start typing to see the binary encoding.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}