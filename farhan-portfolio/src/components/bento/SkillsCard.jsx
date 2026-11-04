"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { useState } from "react";

// Accurate custom SVG icons for tech logos
function TechIcon({ name }) {
  switch (name) {
    case "React":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 fill-[#61DAFB]">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 180 180" className="w-5 h-5 fill-white">
          <mask height="180" id="mask0" maskUnits="userSpaceOnUse" width="180" x="0" y="0">
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <circle cx="90" cy="90" fill="black" r="90" />
          <path d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="url(#paint0_linear)" />
          <rect fill="url(#paint1_linear)" height="72" width="12" x="115" y="54" />
          <defs>
            <linearGradient id="paint0_linear" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="121" x2="120.799" y1="54" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <text x="5" y="18" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#38BDF8]">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#5FA04E]">
          <path d="M12 2L3 7.2v10.4L12 23l9-5.4V7.2L12 2zm0 2.2l6.8 3.9L12 12 5.2 8.1 12 4.2zm-7 5.1l6 3.5v7l-6-3.5v-7zm8 10.5v-7l6-3.5v7l-6 3.5z" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#3776AB" d="M11.9 2c-3 0-5 1.5-5 4v2h5v1H4C2 9 1 11 1 14s1.5 5 4 5h2v-2.5c0-1.7 1.3-3 3-3h5c1.1 0 2-.9 2-2V4c0-1.5-1.5-2-3.1-2h-2z" />
          <path fill="#FFD43B" d="M12.1 22c3 0 5-1.5 5-4v-2h-5v-1h7.9c2 0 3-2 3-5s-1.5-5-4-5h-2v2.5c0 1.7-1.3 3-3 3h-5c-1.1 0-2 .9-2 2v7.5c0 1.5 1.5 2 3.1 2h2z" />
          <circle cx="8" cy="5" r="1" fill="#fff" />
          <circle cx="16" cy="19" r="1" fill="#fff" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#F24E1E" d="M12 2H8.5a3.5 3.5 0 0 0 0 7h3.5V2z" />
          <path fill="#FF7262" d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
          <path fill="#A259FF" d="M12 9H8.5a3.5 3.5 0 0 0 0 7h3.5V9z" />
          <path fill="#1ABCFE" d="M12 9h3.5a3.5 3.5 0 1 1 0 7H12V9z" />
          <path fill="#0ACF83" d="M12 16H8.5A3.5 3.5 0 1 0 12 19.5V16z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SkillsCard() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "React", desc: "Interactive UI" },
    { name: "Next.js", desc: "Fullstack App" },
    { name: "TypeScript", desc: "Type Safety" },
    { name: "Tailwind CSS", desc: "Modern Styling" },
    { name: "Node.js", desc: "Backend API" },
    { name: "Python", desc: "Scripting & Data" },
    { name: "GitHub", desc: "Version Control" },
    { name: "Figma", desc: "UI/UX Design" },
  ];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-purple-400" />
          <h3 className="text-lg font-bold text-white tracking-wide">
            My Skills
          </h3>
        </div>
        <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
          Core Stack
        </span>
      </div>

      {/* Grid of 8 Tech Squares */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3 py-1">
        {skills.map((skill) => (
          <div
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            className="relative flex flex-col items-center justify-center h-16 sm:h-[72px] rounded-2xl bg-[#0E0E1C] border border-purple-500/15 hover:border-purple-400/50 hover:bg-[#151528] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer group"
          >
            <TechIcon name={skill.name} />

            {/* Tooltip */}
            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-8 px-2 py-1 rounded bg-[#1A1A32] border border-purple-400/40 text-[10px] font-semibold text-purple-200 whitespace-nowrap shadow-lg z-30 pointer-events-none"
              >
                {skill.name}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Footer subtle text */}
      <p className="text-[11px] text-gray-400 text-center mt-3">
        Hover icons to view technologies
      </p>
    </motion.div>
  );
}
