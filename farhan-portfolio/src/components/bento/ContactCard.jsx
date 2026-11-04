"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MessageCircle } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolioData";

export default function ContactCard({ onOpenContact }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group h-full"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 -right-8 w-44 h-44 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Mail size={18} className="text-purple-400" />
        <h3 className="text-lg font-bold text-white tracking-wide">
          Get In Touch
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center flex-1">
        {/* Left Info & Actions */}
        <div className="sm:col-span-8 flex flex-col justify-between h-full z-10">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5">
            Have an internship opportunity, project in mind, or just want to say hello? Feel free to reach out!
          </p>

          <div>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-purple hover:bg-gradient-purple-hover text-white text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:scale-105 cursor-pointer mb-5"
            >
              <span>Contact Me</span>
              <ArrowRight size={14} />
            </button>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#121224] border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#121224] border border-purple-500/20 hover:border-purple-400 flex items-center justify-center text-gray-300 hover:text-white hover:bg-purple-600/20 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#121224] border border-purple-500/20 hover:border-green-500 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-200 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Right 3D Origami Paper Plane (SVG) */}
        <div className="sm:col-span-4 flex items-center justify-center pointer-events-none">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
            <svg
              viewBox="0 0 140 140"
              className="w-full h-full animate-float drop-shadow-[0_10px_25px_rgba(139,92,246,0.4)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="planeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="planeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#581C87" />
                </linearGradient>
                <linearGradient id="planeGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DDD6FE" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>

              {/* Curved Flight Trail Line */}
              <path
                d="M 15,115 C 35,115 50,90 70,85 C 90,80 95,65 110,40"
                stroke="rgba(192, 132, 252, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
              />

              {/* 3D Paper Airplane Faces */}
              <polygon points="120,30 50,75 75,85" fill="url(#planeGrad2)" opacity="0.9" />
              <polygon points="120,30 25,65 50,75" fill="url(#planeGrad1)" opacity="0.95" />
              <polygon points="120,30 65,45 25,65" fill="url(#planeGrad3)" opacity="0.85" />
              <polygon points="50,75 60,95 75,85" fill="#4C1D95" opacity="0.95" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
