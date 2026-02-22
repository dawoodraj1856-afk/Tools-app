"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function BlankTextChecker() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  const checkText = () => {
    if (!text.trim()) {
      setStatus("⚠️ The text is blank!");
    } else {
      setStatus("✅ The text has content.");
    }
  };

  return (
    <>
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Blank Text Checker</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter text below to check if it is blank or has content.
        </p>

        {/* Input */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
          rows={5}
        />

        <button
          onClick={checkText}
          className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          Check
        </button>

        {/* Status */}
        {status && (
          <div className="mt-4 p-4 rounded-lg border bg-white shadow-sm text-center">
            <span className="text-lg font-medium">{status}</span>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}