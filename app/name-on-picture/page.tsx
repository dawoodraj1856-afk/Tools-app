"use client";

import { useState } from "react";
import Header from "../Home/Header";
import Footer from "../Home/Footer";

export default function NameOnPicture() {
  const [name, setName] = useState("Dawood");
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80",
  );

  const colors = [
    "#ffffff",
    "#000000",
    "#ec4899",
    "#f97316",
    "#facc15",
    "#22c55e",
    "#3b82f6",
    "#8b5cf6",
  ];

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setImageUrl(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(name);
    alert("Name copied!");
  };

  return (
    <>
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-2">Name on Picture Tool</h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter your name, pick a color, and see it on a picture.
        </p>

        {/* Name input */}
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

        {/* Image selector */}
        <div className="mb-6">
          <label className="text-sm font-medium">
            Upload Background Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block mt-2"
          />
        </div>

        {/* Image preview with name */}
        <div className="relative w-full h-64 mb-4">
          <img
            src={imageUrl}
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
          />
          <div
            style={{ color: selectedColor }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold select-none"
          >
            {name}
          </div>
        </div>

        {/* Copy button */}
        <button
          onClick={copyText}
          className="px-4 py-2 rounded-md bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          Copy Name
        </button>
      </div>
      <Footer />
    </>
  );
}
