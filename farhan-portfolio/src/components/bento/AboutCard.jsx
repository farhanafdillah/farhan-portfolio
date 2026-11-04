"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutCard({ onLearnMore }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
      onClick={onLearnMore}
    >
      {/* Background soft glow on hover */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-colors pointer-events-none" />

      {/* Card Header */}
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={18} className="text-purple-400 fill-purple-400/20" />
        <h3 className="text-lg font-bold text-white tracking-wide">
          About Me
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1">
        {/* Bio Text */}
        <div className="sm:col-span-8 flex flex-col justify-between h-full">
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            A passionate developer and 7th-semester Informatics student focused on building secure networks, intuitive web interfaces, and scalable applications.
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onLearnMore();
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 group-hover:text-purple-200 transition-colors w-fit"
          >
            <span>Learn More</span>
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* 3D Geometric Prism Sculpture (SVG) */}
        <div className="sm:col-span-4 flex items-center justify-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full transform transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(139,92,246,0.3)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="prismGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#6D28D9" />
                </linearGradient>
                <linearGradient id="prismGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4C1D95" />
                  <stop offset="100%" stopColor="#1E1B4B" />
                </linearGradient>
                <linearGradient id="prismGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>

              {/* 3D Isometric Prism Facets */}
              <polygon points="60,15 105,40 60,65 15,40" fill="url(#prismGrad1)" opacity="0.9" />
              <polygon points="15,40 60,65 60,105 15,80" fill="url(#prismGrad2)" opacity="0.95" />
              <polygon points="105,40 60,65 60,105 105,80" fill="url(#prismGrad3)" opacity="0.85" />
              
              {/* Inner Glow Lines */}
              <line x1="60" y1="15" x2="60" y2="65" stroke="#E9D5FF" strokeWidth="1" opacity="0.6" />
              <line x1="15" y1="40" x2="60" y2="65" stroke="#E9D5FF" strokeWidth="1" opacity="0.6" />
              <line x1="105" y1="40" x2="60" y2="65" stroke="#E9D5FF" strokeWidth="1" opacity="0.6" />
              <line x1="60" y1="65" x2="60" y2="105" stroke="#E9D5FF" strokeWidth="1.5" opacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
