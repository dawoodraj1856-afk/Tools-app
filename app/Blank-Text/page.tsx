"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

const translations = {
  ar: {
    title: "فحص النص الفارغ",
    description: "أدخل النص أدناه للتحقق مما إذا كان فارغًا أو يحتوي على محتوى.",
    placeholder: "اكتب النص هنا...",
    check: "تحقق",
    blank: "⚠️ النص فارغ!",
    notBlank: "✅ النص يحتوي على محتوى.",
    switch: "English",
  },
  en: {
    title: "Blank Text Checker",
    description: "Enter text below to check if it is blank or has content.",
    placeholder: "Type your text here...",
    check: "Check",
    blank: "⚠️ The text is blank!",
    notBlank: "✅ The text has content.",
    switch: "العربية",
  },
};

export default function BlankTextChecker() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
    setStatus("");
  };

  const checkText = () => {
    if (!text.trim()) {
      setStatus(t.blank);
    } else {
      setStatus(t.notBlank);
    }
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

        <button
          onClick={checkText}
          className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          {t.check}
        </button>

        {/* Status */}
        {status && (
          <div className="mt-4 p-4 rounded-lg border bg-white shadow-sm text-center">
            <span className="text-lg font-medium">{status}</span>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}