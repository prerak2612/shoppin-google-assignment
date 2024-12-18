"use client";
import { useState } from "react";
import Link from "next/link";

export default function ListeningPage() {
  const [isListening, setIsListening] = useState(true);

  const handleClose = () => {
    setIsListening(false);
  };

  if (!isListening) return null;

  return (
    <div className="flex justify-center items-center h-screen bg-[#202124] relative">
      <Link href="/">
        <button
          className="absolute top-4 right-4 bg-[#1F1F1F] rounded-full w-8 h-8 flex items-center justify-center"
          onClick={handleClose}
        >
          <img
            src="cross-removebg-preview.png"
            alt="clear-icon"
            className="h-5 w-5 filter brightness-0 invert-[0.6] sepia-[0.2] hue-rotate-[210deg] saturate-[2] opacity-80"
          />
        </button>
      </Link>
      <div className="flex flex-col sm:flex-row items-center">
        <p className="text-[#A0A3A5] text-2xl sm:text-3xl lg:text-4xl flex items-center space-x-2 sm:mr-4">
          <span>Listening</span>
          <span className="flex">
            <span className="animate-dot-blink animate-dot-blink-1">.</span>
            <span className="animate-dot-blink animate-dot-blink-2">.</span>
            <span className="animate-dot-blink animate-dot-blink-3">.</span>
          </span>
        </p>
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center mt-6 sm:mt-0 sm:translate-x-4">
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white rounded-full"></div>
          <img
            src="icon-microphone.png"
            alt="Microphone"
            className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
          />
        </div>
      </div>
    </div>
  );
}
