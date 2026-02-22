"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function LetterCounter() {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [useEnglish, setUseEnglish] = useState(false);
  const [copied, setCopied] = useState(false);

  const colors = [
    "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
    "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
    "#a855f7","#d946ef","#fb7185","#64748b","#000000",
  ];

  const letterCount = text.replace(/\s/g, "").length;
  const characterCount = text.length;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Letters: ${letterCount}, Characters: ${characterCount}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">
          {useEnglish ? "Letter Counter Tool" : "أداة عد الحروف"}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {useEnglish
            ? "Type any text below to count letters and characters."
            : "اكتب أي نص أدناه لعد الحروف وعدد الرموز."}
        </p>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={useEnglish ? "Type your text here..." : "اكتب نصك هنا..."}
          dir={useEnglish ? "ltr" : "rtl"}
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          rows={5}
        />

        {/* Language toggle */}
        <div className="flex gap-3 mb-5">
          <button
            onClick={() => setUseEnglish(!useEnglish)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
              useEnglish ? "bg-pink-500 text-white border-pink-500" : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {useEnglish ? "English" : "العربية"}
          </button>
        </div>

        {/* Color selector */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {colors.map((c) => (
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

        {/* Results */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center"
          style={{ color: selectedColor }}
        >
          {text ? (
            <>
              <p className="text-lg font-medium">
                {useEnglish
                  ? `Letters (no spaces): ${letterCount}`
                  : `الحروف (بدون فراغات): ${letterCount}`}
              </p>
              <p className="text-lg font-medium mt-2">
                {useEnglish
                  ? `Total Characters: ${characterCount}`
                  : `إجمالي الرموز: ${characterCount}`}
              </p>

              <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-600 transition"
              >
                {copied ? (useEnglish ? "Copied!" : "تم النسخ!") : (useEnglish ? "Copy" : "نسخ")}
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              {useEnglish
                ? "Start typing to see the count."
                : "ابدأ بالكتابة لرؤية العد."}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}