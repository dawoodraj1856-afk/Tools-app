"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

/* -------------------------------
   UI Translations
--------------------------------*/
const translations = {
  ar: {
    title: "أداة ترتيب الكلمات أبجديًا",
    description:
      "اكتب النص وسيتم ترتيب الكلمات أبجديًا. يمكنك أيضًا نسخ النتيجة.",
    placeholder: "اكتب النص هنا...",
    start: "ابدأ بالكتابة لعرض النص المرتب هنا",
    copy: "نسخ",
    copied: "تم النسخ!",
    switch: "English",
  },
  en: {
    title: "Alphabetical Order Tool",
    description:
      "Type your text and see the words sorted alphabetically. You can also copy the result.",
    placeholder: "Type your text here...",
    start: "Start typing to see the sorted text here.",
    copy: "Copy",
    copied: "Copied!",
    switch: "العربية",
  },
};

export default function AlphabeticalOrder() {
  const [lang, setLang] = useState<"ar" | "en">("ar"); // default Arabic
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [copied, setCopied] = useState(false);

  const t = translations[lang];

  const colors = [
    "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
    "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
    "#a855f7","#d946ef","#fb7185","#64748b","#000000",
  ];

  const toggleLanguage = () => {
    setLang((p) => (p === "ar" ? "en" : "ar"));
  };

  // Split words, sort alphabetically
  const sortedText = text
    ? text
        .split(/\s+/)
        .filter(Boolean)
        .sort((a, b) => a.localeCompare(b))
        .join(" ")
    : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(sortedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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

        {/* Sorted output */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center break-words"
          style={{ color: selectedColor }}
        >
          {sortedText ? (
            <>
              <p className="text-lg font-medium">{sortedText}</p>

              <button
                onClick={copyToClipboard}
                className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-600 transition"
              >
                {copied ? t.copied : t.copy}
              </button>
            </>
          ) : (
            <p className="text-sm text-gray-500">{t.start}</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}