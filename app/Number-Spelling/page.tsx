"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

/* -------------------------------
   Number to words (English)
--------------------------------*/
function numberToWords(num: number): string {
  if (num === 0) return "zero";

  const belowTwenty = [
    "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen",
  ];
  const tens = [
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",
  ];
  const thousands = ["", "thousand", "million", "billion"];

  let word = "";

  function helper(n: number): string {
    if (n === 0) return "";
    if (n < 20) return belowTwenty[n] + " ";
    if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
    return belowTwenty[Math.floor(n / 100)] + " hundred " + helper(n % 100);
  }

  let i = 0;
  while (num > 0) {
    if (num % 1000 !== 0) {
      word = helper(num % 1000) + thousands[i] + " " + word;
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return word.trim();
}

export default function NumberSpelling() {
  const [number, setNumber] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [copied, setCopied] = useState(false);

  const colors = [
    "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
    "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
    "#a855f7","#d946ef","#fb7185","#64748b","#000000",
  ];

  const num = Number(number);
  const spelled = !isNaN(num) ? numberToWords(num) : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(spelled);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Number Spelling Tool</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter a number to see it spelled out in words.
        </p>

        {/* Input */}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Type a number here..."
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
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

        {/* Spelled number output */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center break-words"
          style={{ color: selectedColor }}
        >
          {spelled ? (
            <>
              <p className="text-lg font-medium">{spelled}</p>
              <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-600 transition"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">Enter a number to see it spelled here.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}