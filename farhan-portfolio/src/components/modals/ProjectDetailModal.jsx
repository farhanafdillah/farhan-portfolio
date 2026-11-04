"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

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
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer z-20"
          >
            <X size={18} />
          </button>

          {/* Project Image */}
          <div className="relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-[#080811] border border-purple-500/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Category */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-mono text-purple-400 mb-6">
            {project.category}
          </p>

          {/* Problem, Solution, Result Sections */}
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-2xl bg-[#141426] border border-purple-500/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Problem & Context
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141426] border border-purple-500/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Technical Solution
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                {project.solution}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141426] border border-purple-500/15">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Key Outcome & Impact
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                {project.result}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-purple hover:bg-gradient-purple-hover text-white text-sm font-semibold transition-all hover:scale-105"
            >
              <Github size={16} />
              <span>GitHub Repository</span>
            </a>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#18182E] hover:bg-[#20203D] text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
