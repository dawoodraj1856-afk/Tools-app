"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

// Existing styles (unchanged)
const styles = [
  (t: string) => `꧁༺${t}༻꧂`,
  (t: string) => `★彡${t}彡★`,
  (t: string) => `『${t}』`,
  (t: string) => `彡[${t}]彡`,
  (t: string) => `༒${t}༒`,
  (t: string) => `☬${t}☬`,
  (t: string) => `⚡${t}⚡`,
  (t: string) => `ꜱᴋ ${t}`,
  (t: string) => `${t} ツ`,
  (t: string) => `꧁☆${t}☆꧂`,
  (t: string) => `✿${t}✿`,
  (t: string) => `【${t}】`,
  (t: string) => `《${t}》`,
  (t: string) => `✧${t}✧`,
  (t: string) => `✦${t}✦`,
  (t: string) => `♛${t}♛`,
  (t: string) => `☯️${t}☯️`,
  (t: string) => `ღ${t}ღ`,
  (t: string) => `✵${t}✵`,
  (t: string) => `✾${t}✾`,
];

// Colors
const colors = [
  "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
  "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
  "#a855f7","#d946ef","#fb7185","#64748b","#000000"
];

// Arabic → English map
const arabicToEnglishMap: Record<string, string> = {
  ا: "a", ب: "b", ت: "t", ث: "th", ج: "j", ح: "h", خ: "kh", د: "d", ذ: "dh",
  ر: "r", ز: "z", س: "s", ش: "sh", ص: "s", ض: "d", ط: "t", ظ: "z", ع: "a",
  غ: "gh", ف: "f", ق: "q", ك: "k", ل: "l", م: "m", ن: "n", ه: "h", و: "w",
  ي: "y", ء: ""
};

function arabicToEnglish(text: string) {
  return text.split("").map(ch => arabicToEnglishMap[ch] ?? ch).join("");
}

export default function InstagramDecoration() {
  const [name, setName] = useState("داؤود"); // Arabic default
  const [lang, setLang] = useState<"ar"|"en">("ar"); // Arabic default
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const finalName = lang === "en" ? arabicToEnglish(name) : name;
  const results = finalName ? styles.map(fn => fn(finalName.trim())) : [];

  const copyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleLanguage = () => setLang(prev => prev === "ar" ? "en" : "ar");

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">
            {lang === "ar" ? "أداة زخرفة أسماء Instagram" : "Instagram Name Decoration Tool"}
          </h1>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-lg border text-sm font-medium bg-white hover:bg-gray-100 transition"
          >
            {lang === "ar" ? "English" : "العربية"}
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-6">
          {lang === "ar"
            ? "أدخل اسمك، اختر اللون، وحوّل من العربية إلى الإنجليزية إذا أردت."
            : "Enter your name, choose a color, and convert Arabic → English if needed."}
        </p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={lang === "ar" ? "أدخل اسمك (عربي أو إنجليزي)" : "Enter your Instagram name (Arabic or English)"}
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Color selector */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          {colors.map(c => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedColor(c)}
              className={`w-8 h-8 rounded-full border-2 transition ${
                selectedColor === c ? "border-gray-900 scale-110" : "border-gray-300"
              }`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Decorated names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {results.map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-between gap-3 rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">
              <span className="select-all text-base font-semibold text-center break-all" style={{ color: selectedColor }}>
                {item}
              </span>
              <button
                onClick={() => copyText(item, i)}
                className="mt-1 text-xs px-3 py-1.5 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
              >
                {copiedIndex === i
                  ? (lang === "ar" ? "تم النسخ ✔" : "Copied! ✔")
                  : (lang === "ar" ? "نسخ" : "Copy")}
              </button>
            </div>
          ))}

          {!finalName && (
            <p className="text-sm text-gray-400 col-span-full text-center">
              {lang === "ar" ? "اكتب اسمك لإنشاء الزخارف" : "Type your name to generate decorations."}
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}