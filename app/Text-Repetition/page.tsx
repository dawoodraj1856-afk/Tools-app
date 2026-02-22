"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

/* Arabic -> English map */
const arabicToEnglishMap: Record<string, string> = {
  ا: "a", ب: "b", ت: "t", ث: "th", ج: "j", ح: "h", خ: "kh",
  د: "d", ذ: "dh", ر: "r", ز: "z", س: "s", ش: "sh", ص: "s",
  ض: "d", ط: "t", ظ: "z", ع: "a", غ: "gh", ف: "f", ق: "q",
  ك: "k", ل: "l", م: "m", ن: "n", ه: "h", و: "w", ي: "y", ء: "",
};

function arabicToEnglish(text: string) {
  return text
    .split("")
    .map((ch) => arabicToEnglishMap[ch] ?? ch)
    .join("");
}

export default function TextRepetition() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [useArabicToEnglish, setUseArabicToEnglish] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [copied, setCopied] = useState(false);

  const colors = [
    "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
    "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
    "#a855f7","#d946ef","#fb7185","#64748b","#000000",
  ];

  const displayText = useArabicToEnglish ? arabicToEnglish(text) : text;
  const repeatedText = displayText ? Array(count).fill(displayText).join(" ") : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(repeatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Text Repetition Tool</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter text, choose number of repetitions, and optionally convert Arabic → English.
        </p>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          rows={4}
        />

        {/* Number of repetitions */}
        <div className="flex items-center gap-3 mb-4">
          <label className="text-sm font-medium">Repetitions:</label>
          <input
            type="number"
            min={1}
            max={100}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="border rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400 w-20"
          />
        </div>

        {/* Arabic → English toggle */}
        <div className="flex items-center gap-3 mb-5">
          <button
            type="button"
            onClick={() => setUseArabicToEnglish((p) => !p)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
              useArabicToEnglish
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            Arabic → English
          </button>

          {useArabicToEnglish && (
            <span className="text-xs text-gray-500">
              Converted: {arabicToEnglish(text)}
            </span>
          )}
        </div>

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

        {/* Repeated text output */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center break-words"
          style={{ color: selectedColor }}
        >
          {repeatedText || (
            <p className="text-sm text-gray-500">
              Start typing to see repeated text.
            </p>
          )}

          {repeatedText && (
            <button
              onClick={copyToClipboard}
              className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-600 transition"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}