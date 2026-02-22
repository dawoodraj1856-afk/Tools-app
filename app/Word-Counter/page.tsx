"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

/* -------------------------------
   Arabic -> English map (simple)
--------------------------------*/
const arabicToEnglishMap: Record<string, string> = {
  ا: "a",
  ب: "b",
  ت: "t",
  ث: "th",
  ج: "j",
  ح: "h",
  خ: "kh",
  د: "d",
  ذ: "dh",
  ر: "r",
  ز: "z",
  س: "s",
  ش: "sh",
  ص: "s",
  ض: "d",
  ط: "t",
  ظ: "z",
  ع: "a",
  غ: "gh",
  ف: "f",
  ق: "q",
  ك: "k",
  ل: "l",
  م: "m",
  ن: "n",
  ه: "h",
  و: "w",
  ي: "y",
  ء: "",
};

function arabicToEnglish(text: string) {
  return text
    .split("")
    .map((ch) => arabicToEnglishMap[ch] ?? ch)
    .join("");
}

/* -------------------------------
   UI Translations
--------------------------------*/
const translations = {
  ar: {
    title: "أداة عدّ الكلمات",
    description: "اكتب أو الصق النص أدناه لعدّ الكلمات والأحرف فورًا.",
    placeholder: "اكتب النص هنا...",
    words: "عدد الكلمات",
    characters: "عدد الأحرف",
    start: "ابدأ بالكتابة لعرض النتائج",
    convertBtn: "تحويل من العربية إلى الإنجليزية",
    converted: "النص المحوّل:",
    switch: "English",
  },
  en: {
    title: "Word Counter Tool",
    description:
      "Type or paste your text below to count words and characters instantly.",
    placeholder: "Type your text here...",
    words: "Words",
    characters: "Characters",
    start: "Start typing to see the count.",
    convertBtn: "Arabic → English",
    converted: "Converted:",
    switch: "العربية",
  },
};

export default function WordCounter() {
  // default language = Arabic
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [useArabicToEnglish, setUseArabicToEnglish] = useState(false);

  const t = translations[lang];

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

  const displayText = useArabicToEnglish ? arabicToEnglish(text) : text;

  const wordCount = displayText.trim()
    ? displayText.trim().split(/\s+/).filter(Boolean).length
    : 0;

  const charCount = displayText.length;

  const toggleLanguage = () => {
    setLang((p) => (p === "ar" ? "en" : "ar"));
  };

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"} className="min-h-screen">
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold mb-1">{t.title}</h1>
            <p className="text-sm text-gray-500">{t.description}</p>
          </div>

          <button
            onClick={toggleLanguage}
            className="border rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
          >
            {t.switch}
          </button>
        </div>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t.placeholder}
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          rows={5}
        />

        {/* Arabic → English toggle */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <button
            type="button"
            onClick={() => setUseArabicToEnglish((p) => !p)}
            className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
              useArabicToEnglish
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {t.convertBtn}
          </button>

          {useArabicToEnglish && (
            <span className="text-xs text-gray-500">
              {t.converted} {arabicToEnglish(text)}
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

        {/* Results */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center"
          style={{ color: selectedColor }}
        >
          <p className="text-lg font-medium">
            {t.words}: <span className="font-bold">{wordCount}</span>
          </p>
          <p className="text-lg font-medium mt-2">
            {t.characters}: <span className="font-bold">{charCount}</span>
          </p>

          {!text && (
            <p className="mt-4 text-sm text-gray-500">{t.start}</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}