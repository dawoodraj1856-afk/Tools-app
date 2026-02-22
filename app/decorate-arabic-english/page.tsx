"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

// Arabic → English map
const arabicToEnglishMap: Record<string, string> = {
  ا: "a", ب: "b", ت: "t", ث: "th", ج: "j", ح: "h", خ: "kh",
  د: "d", ذ: "dh", ر: "r", ز: "z", س: "s", ش: "sh", ص: "s",
  ض: "d", ط: "t", ظ: "z", ع: "a", غ: "gh", ف: "f", ق: "q",
  ك: "k", ل: "l", م: "m", ن: "n", ه: "h", و: "w", ي: "y", ء: "",
};

// Convert Arabic text to English
function arabicToEnglish(text: string) {
  return text
    .split("")
    .map((ch) => arabicToEnglishMap[ch] ?? ch)
    .join("");
}

// Mixed decorative styles
const styles = [
  (t: string) => t.toUpperCase(),
  (t: string) => t.toLowerCase(),
  (t: string) => `*${t}*`,
  (t: string) => `~${t}~`,
  (t: string) => `⸻${t}⸻`,
  (t: string) => `✧${t}✧`,
  (t: string) => `꧁${t}꧂`,
  (t: string) => `★${t}★`,
  (t: string) => `【${t}】`,
  (t: string) => `✿${t}✿`,
  (t: string) => `${t} ツ`,
  (t: string) => `♛${t}♛`,
  (t: string) => `ღ${t}ღ`,
  (t: string) => `⚡${t}⚡`,
  (t: string) => `☯️${t}☯️`,
  (t: string) => t.split("").join(" "),
  (t: string) => t.split("").reverse().join(""),
  (t: string) => t.replace(/./g, "•"),
  (t: string) => `✵${t}✵`,
  (t: string) => t.split("").map(c => c + "✦").join(""),
];

// Color options
const colors = [
  "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
  "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
  "#a855f7","#d946ef","#fb7185","#64748b","#000000"
];

export default function DecorativeArabicEnglish() {
  const [name, setName] = useState("محمد");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [useArabicToEnglish, setUseArabicToEnglish] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const finalName = useArabicToEnglish ? arabicToEnglish(name) : name;
  const results = finalName ? styles.map(fn => fn(finalName.trim())) : [];

  const copyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">
          Decorative Arabic → English Tool
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter Arabic or English text, convert it, and get decorative styles.
        </p>

        {/* Input */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type Arabic or English name"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Arabic → English toggle */}
        <div className="flex items-center gap-3 mb-5">
          <button
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
              Converted: {arabicToEnglish(name)}
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
            />
          ))}
        </div>

        {/* Results */}
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
          {!finalName && (
            <p className="text-sm text-gray-400 col-span-full text-center">
              Type your name to generate decorations.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}