"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

// Flip characters map
const flipMap: Record<string, string> = {
  a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ",
  h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "ʃ", m: "ɯ", n: "u",
  o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n",
  v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
  A: "∀", B: "𐐒", C: "Ɔ", D: "◖", E: "Ǝ", F: "Ⅎ", G: "פ",
  H: "H", I: "I", J: "ſ", K: "⋊", L: "⅃", M: "W", N: "N",
  O: "O", P: "Ԁ", Q: "Ό", R: "ᴚ", S: "S", T: "⊥", U: "∩",
  V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
  "1":"Ɩ","2":"ᄅ","3":"Ɛ","4":"ㄣ","5":"ϛ","6":"9","7":"ㄥ","8":"8","9":"6","0":"0",
  ".":"˙", ",":"'","'":",","\"":",,", "?":"¿","!":"¡","[":"]", "]":"[","(" :")", ")":"(",
  "{":"}", "}":"{","<":">", ">":"<","&":"⅋","_":"‾"
};

function flipText(text: string) {
  return text
    .split("")
    .map(c => flipMap[c] ?? c)
    .reverse()
    .join("");
}

export default function FlipText() {
  const [text, setText] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ec4899");
  const [copied, setCopied] = useState(false);

  const colors = [
    "#ec4899","#ef4444","#f97316","#facc15","#22c55e",
    "#10b981","#06b6d4","#3b82f6","#6366f1","#8b5cf6",
    "#a855f7","#d946ef","#fb7185","#64748b","#000000"
  ];

  const flipped = flipText(text);

  const copyText = () => {
    navigator.clipboard.writeText(flipped);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">أداة قلب النصوص</h1>
        <p className="text-sm text-gray-500 mb-6">
          اكتب أي نص وشاهد النسخة المقلوبة. يمكنك نسخها واستخدامها في أي مكان!
        </p>

        {/* Text input */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="اكتب النص هنا"
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        {/* Color selector */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
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

        {/* Flipped text display */}
        <div
          className="rounded-xl border bg-white p-6 shadow-sm text-center break-words min-h-[60px] flex items-center justify-center"
          style={{ color: selectedColor }}
        >
          {flipped || <p className="text-sm text-gray-500">اكتب النص لتراه مقلوباً.</p>}
        </div>

        {/* Copy button */}
        {flipped && (
          <div className="text-center mt-4">
            <button
              onClick={copyText}
              className="text-xs px-3 py-1.5 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              {copied ? "تم النسخ!" : "نسخ"}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}