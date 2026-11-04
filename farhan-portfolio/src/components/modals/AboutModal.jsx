"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Award, Users, Download, ArrowUpRight } from "lucide-react";
import { personalInfo, educationHistory, certifications } from "@/data/portfolioData";

export default function AboutModal({ isOpen, onClose, onOpenContact }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0E0E1E] border border-purple-500/30 p-6 sm:p-8 shadow-[0_25px_70px_rgba(139,92,246,0.3)] z-10 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              Profile Overview
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              About {personalInfo.fullName}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-purple-300 mt-0.5">
              {personalInfo.subRole}
            </p>
          </div>

          {/* Bio paragraph */}
          <p className="text-sm text-gray-300 leading-relaxed text-justify mb-8 p-4 rounded-2xl bg-[#141426] border border-purple-500/15">
            {personalInfo.extendedBio}
          </p>

          {/* Education Timeline */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <GraduationCap size={16} /> Education & Experience
            </h4>
            <div className="space-y-3">
              {educationHistory.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#141426] border border-purple-500/15 flex flex-col gap-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-bold text-sm text-white">{edu.institution}</h5>
                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-purple-300">{edu.degree}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1 text-justify">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-3 flex items-center gap-2">
              <Award size={16} /> Professional Certification
            </h4>
            <div className="space-y-2">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-[#141426] border border-purple-500/15 flex items-center justify-between"
                >
                  <div>
                    <h5 className="font-bold text-sm text-white">{cert.name}</h5>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={personalInfo.cv}
              download
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-purple hover:bg-gradient-purple-hover text-white text-sm font-semibold transition-all hover:scale-105"
            >
              <Download size={15} />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#18182E] hover:bg-[#20203D] text-purple-200 text-sm font-medium transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
