"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Play, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero({ onOpenIntro }) {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background radial purple glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/15 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Vertical Tracker (Desktop Left Indicator) */}
      <div className="hidden lg:flex flex-col items-center gap-3 absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 select-none">
        <span className="text-[11px] font-mono tracking-widest uppercase [writing-mode:vertical-rl] rotate-180">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent" />
        <span className="text-xs font-mono text-purple-400 font-semibold">01</span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & CTAs (7 Cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <span>👋</span>
            <span>{personalInfo.greeting}</span>
          </div>

          {/* Large Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-5">
            Farhan Bayna
            <br />
            <span className="text-white">Informatics </span>
            <span className="text-gradient-purple drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
              Student
            </span>
          </h1>

          {/* Subtitle / Tagline Asli Farhan */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8">
            {personalInfo.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-purple hover:bg-gradient-purple-hover text-white text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowDown size={16} />
            </button>

            <button
              onClick={onOpenIntro}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#131326]/80 hover:bg-[#1C1C35] border border-purple-500/20 hover:border-purple-500/40 text-purple-200 text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-full bg-purple-600/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Play size={13} className="ml-0.5 fill-current" />
              </div>
              <span>Watch Intro</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: 3D Visual & Profile Photo (5 Cols on desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Abstract 3D Violet Ribbon Backdrop (SVG Art) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 scale-125">
            <svg
              viewBox="0 0 500 500"
              className="w-full h-full max-w-[480px] animate-float opacity-80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="ribbonGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#4C1D95" />
                </linearGradient>
                <linearGradient id="ribbonGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#2E1065" />
                </linearGradient>
                <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="20" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Glowing Background Aura */}
              <circle cx="250" cy="250" r="140" fill="#7C3AED" opacity="0.25" filter="url(#glowFilter)" />

              {/* 3D Curved Ribbon Back Loop */}
              <path
                d="M 120,240 C 90,140 190,80 270,110 C 370,145 420,270 340,360 C 270,440 140,400 130,300"
                stroke="url(#ribbonGrad2)"
                strokeWidth="42"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />

              {/* 3D Curved Ribbon Front Twist */}
              <path
                d="M 230,100 C 330,70 410,140 400,240 C 390,340 300,420 200,390 C 130,370 110,290 160,220"
                stroke="url(#ribbonGrad1)"
                strokeWidth="32"
                strokeLinecap="round"
                fill="none"
                opacity="0.95"
              />

              {/* Cybernetic Orbit Line */}
              <ellipse
                cx="250"
                cy="250"
                rx="190"
                ry="100"
                transform="rotate(-25 250 250)"
                stroke="rgba(192, 132, 252, 0.35)"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                fill="none"
              />
            </svg>
          </div>

          {/* Profile Card Container */}
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[410px] rounded-[32px] overflow-hidden p-1.5 bg-gradient-to-b from-purple-500/40 via-purple-600/10 to-transparent shadow-[0_0_50px_rgba(139,92,246,0.3)]">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-[#0A0A16]">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.fullName}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080811] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Floating Badge: Open to Opportunities */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 sm:bottom-6 -right-2 sm:right-0 px-4 py-2 rounded-full bg-[#121226]/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-2.5 z-20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10B981]"></span>
            </span>
            <span className="text-xs font-semibold text-gray-200">
              {personalInfo.status}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
