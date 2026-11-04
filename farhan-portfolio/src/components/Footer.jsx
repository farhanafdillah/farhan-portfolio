"use client";

import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-12 pb-16 border-t border-purple-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo Left */}
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-xl tracking-wider text-purple-400">
              F/
            </span>
            <span className="font-bold text-base sm:text-lg text-white">
              Farhan Bayna Afdillah
            </span>
          </div>

          {/* Copyright Middle */}
          <p className="text-xs sm:text-sm text-gray-500 text-center font-mono">
            © 2026 Farhan. All rights reserved.
          </p>

          {/* Slogan Right with Line */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-20 h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-purple-400" />
            <span className="text-xs font-mono tracking-widest text-purple-300 uppercase font-semibold">
              Build. Learn. Grow.
            </span>
          </div>
        </div>
      </div>

      {/* Floating Scroll To Top Button (Bottom-Right) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#121226]/90 border border-purple-500/40 hover:border-purple-400 text-purple-300 hover:text-white flex items-center justify-center backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-110 transition-all duration-300 cursor-pointer"
        aria-label="Scroll to Top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
}
