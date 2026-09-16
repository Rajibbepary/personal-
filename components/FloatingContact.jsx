

"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaFacebookMessenger,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdChat } from "react-icons/md";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/8801759366647"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-16 w-16 items-center justify-center rounded-full
        bg-green-500 text-white shadow-lg
        transition-all duration-300
        hover:scale-110
        ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-75 opacity-0"
        }`}
      >
        <FaWhatsapp size={32} />
      </a>

      {/* Phone */}
      <a
        href="tel:+8801759366647"
        className={`flex h-16 w-16 items-center justify-center rounded-full
        bg-emerald-500 text-white shadow-lg
        transition-all duration-300
        hover:scale-110
        ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-75 opacity-0"
        }`}
        style={{
          transitionDelay: open ? "100ms" : "0ms",
        }}
      >
        <FaPhone size={28} />
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/Rajib Raj"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-16 w-16 items-center justify-center rounded-full
        bg-blue-500 text-white shadow-lg
        transition-all duration-300
        hover:scale-110
        ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-75 opacity-0"
        }`}
        style={{
          transitionDelay: open ? "200ms" : "0ms",
        }}
      >
        <FaFacebookMessenger size={30} />
      </a>

      {/* Main Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact menu"
        className={`flex h-14 w-14 items-center justify-center
        rounded-full bg-purple-400 text-white shadow-lg
        transition-all duration-300
        hover:scale-110 ${
          open ? "rotate-0" : "rotate-0"
        }`}
      >
        {open ? (
          <FaXmark size={30} />
        ) : (
          <MdChat size={30} />
        )}
      </button>
    </div>
  );
}