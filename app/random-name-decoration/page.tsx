"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

// Random styles array (Latin)
const styles = [
  (t: string) => t.toUpperCase(),
  (t: string) => t.toLowerCase(),
  (t: string) => `*${t}*`,
  (t: string) => `~${t}~`,
  (t: string) => `✧${t}✧`,
  (t: string) => `★${t}★`,
  (t: string) => `꧁${t}꧂`,
  (t: string) => `【${t}】`,
  (t: string) => `ღ${t}ღ`,
  (t: string) => `⚡${t}⚡`,
  (t: string) => t.split("").join(" "),
  (t: string) => t.split("").reverse().join(""),
];

// Arabic decoration styles
const arabicStyles = [
  (t: string) => `✧ ${t} ✧`,
  (t: string) => `★ ${t} ★`,
  (t: string) => `ღ ${t} ღ`,
  (t: string) => `【 ${t} 】`,
  (t: string) => `⚡ ${t} ⚡`,
  (t: string) => `~ ${t} ~`,
  (t: string) => `* ${t} *`,
];

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

export default function RandomNameDecoration() {
  const [name, setName] = useState("داوود"); // default Arabic name
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [decoratedName, setDecoratedName] = useState("");

  const generateDecoration = (isArabic: boolean = false) => {
    if (!name.trim()) return;
    const styleArray = isArabic ? arabicStyles : styles;
    const randomStyle =
      styleArray[Math.floor(Math.random() * styleArray.length)];
    setDecoratedName(randomStyle(name.trim()));
  };

  const copyText = () => {
    if (!decoratedName) return;
    navigator.clipboard.writeText(decoratedName);
    alert("Decorated name copied!");
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">
          أداة زخرفة الأسماء العشوائية
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          أدخل اسمك وأنشئ نسخة مزخرفة عشوائية منه.
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Color selector */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
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

        {/* Generate buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <button
            onClick={() => generateDecoration(false)}
            className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
          >
            Generate Random Decoration
          </button>
          <button
            onClick={() => generateDecoration(true)}
            className="px-4 py-2 rounded-md bg-purple-500 text-white hover:bg-purple-600 transition"
          >
            Generate Arabic Decoration
          </button>
          <button
            onClick={copyText}
            className="px-4 py-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
          >
            Copy
          </button>
        </div>

        {/* Result */}
        {decoratedName && (
          <div
            className="rounded-xl border bg-white p-6 shadow-sm text-center text-2xl font-bold"
            style={{ color: selectedColor }}
          >
            {decoratedName}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
