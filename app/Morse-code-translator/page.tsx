"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

/* Abjad numerology map (Arabic letters → numerical values) */
const abjadMap: Record<string, number> = {
  ا: 1, ب: 2, ج: 3, د: 4, ه: 5, و: 6, ز: 7, ح: 8, ط: 9,
  ي: 10, ك: 20, ل: 30, م: 40, ن: 50, س: 60, ع: 70, ف: 80,
  ص: 90, ق: 100, ر: 200, ش: 300, ت: 400, ث: 500, خ: 600,
  ذ: 700, ض: 800, ظ: 900, غ: 1000
};

function calculateAbjadValue(text: string) {
  return text.split("").reduce((sum, ch) => sum + (abjadMap[ch] ?? 0), 0);
}

export default function AbjadNumerology() {
  const [text, setText] = useState("");
  const [useEnglish, setUseEnglish] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [copied, setCopied] = useState(false);

  const colors = [
    "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
    "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
    "#a855f7","#d946ef","#fb7185","#64748b","#000000",
  ];

  const displayText = text;
  const abjadValue = calculateAbjadValue(displayText);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(abjadValue.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">
          {useEnglish ? "Abjad Numerology Tool" : "أداة حساب الجُمَّل"}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {useEnglish
            ? "Enter Arabic letters to calculate their Abjad value."
            : "أدخل الحروف العربية لحساب القيمة الأبجدية."}
        </p>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={useEnglish
            ? "Type Arabic letters here..."
            : "اكتب الحروف العربية هنا..."}
          dir="rtl"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          rows={4}
        />

        {/* English / Arabic toggle */}
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

        {/* Abjad value output */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center"
          style={{ color: selectedColor }}
        >
          {text ? (
            <>
              <p className="text-lg font-medium">{abjadValue}</p>
              <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-600 transition"
              >
                {copied
                  ? useEnglish ? "Copied!" : "تم النسخ!"
                  : useEnglish ? "Copy" : "نسخ"}
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              {useEnglish
                ? "Start typing Arabic letters to see the Abjad value."
                : "ابدأ بكتابة الحروف العربية لعرض القيمة الأبجدية."}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}