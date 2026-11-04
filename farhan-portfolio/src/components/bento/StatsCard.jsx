"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/portfolioData";

export default function StatsCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bento-card p-6 sm:p-7 flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-3 gap-2 sm:gap-4 items-center h-full">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-3 ${
              idx !== 0 ? "border-l border-purple-500/20" : ""
            }`}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-gradient-purple drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm font-medium text-gray-400 mt-1 leading-snug">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
