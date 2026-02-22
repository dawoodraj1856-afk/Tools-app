"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function SmileysTool() {
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // List of smileys
  const smileys = [
    "😊",
    "😂",
    "😍",
    "😎",
    "😜",
    "😢",
    "🤩",
    "🤔",
    "😇",
    "🥰",
    "😱",
    "😴",
    "🤪",
    "😏",
    "😌",
    "🙃",
    "😋",
    "😅",
    "😤",
    "🤯",
    "🤗",
    "😚",
    "😛",
    "😝",
    "🤤",
    "🤐",
    "🤓",
    "🧐",
    "😶",
    "😑",
    "😐",
    "😪",
    "😳",
    "🥵",
    "🥶",
    "🥳",
    "😵",
    "🤯",
    "🤠",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
    "👻",
    "💀",
    "☠️",
    "👽",
    "🤖",
    "🎃",
    "😈",
    "👿",
    "😺",
    "😸",
    "😹",
    "😻",
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

  const copySmiley = (smiley: string, index: number) => {
    navigator.clipboard.writeText(smiley);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Smileys Tool</h1>
        <p className="text-sm text-gray-500 mb-6">
          Click a smiley to copy it. You can also pick a color for fun!
        </p>

        {/* Color selector */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
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

        {/* Smileys grid */}
        <div className="grid grid-cols-5 sm:grid-cols-8 gap-4">
          {smileys.map((smiley, i) => (
            <button
              key={i}
              onClick={() => copySmiley(smiley, i)}
              className="flex items-center justify-center rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition text-2xl"
              style={{ color: selectedColor }}
            >
              {copiedIndex === i ? "Copied!" : smiley}
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
