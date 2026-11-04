"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/portfolioData";

export default function StatsCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bento-card p-5 sm:p-6 lg:p-7 flex flex-col justify-center relative overflow-hidden h-full"
    >
      {/* Background ambient glow */}
      <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between w-full">
        {stats.map((stat, idx) => (
          <div key={stat.label} className="flex items-center flex-1 justify-between">
            {/* Stat Item */}
            <div className="flex flex-col items-start px-2 sm:px-3">
              <span className="text-2xl sm:text-3xl xl:text-[34px] font-extrabold text-white tracking-tight text-gradient-purple drop-shadow-[0_0_15px_rgba(139,92,246,0.3)] leading-none mb-2">
                {stat.value}
              </span>
              <span className="text-[11px] sm:text-xs text-gray-400 font-medium leading-tight max-w-[85px] sm:max-w-[100px]">
                {stat.label}
              </span>
            </div>

            {/* Elegant Divider between items (not after the last item) */}
            {idx < stats.length - 1 && (
              <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent flex-shrink-0 mx-1 sm:mx-2" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
