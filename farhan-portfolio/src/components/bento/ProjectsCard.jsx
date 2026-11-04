"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolioData";

export default function ProjectsCard({ onSelectProject, onViewAll }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="bento-card p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <FolderGit2 size={18} className="text-purple-400" />
          <h3 className="text-lg font-bold text-white tracking-wide">
            My Projects
          </h3>
        </div>

        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors group cursor-pointer"
        >
          <span>View All Projects</span>
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>

      {/* 3 Horizontal Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 flex-1">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group flex flex-col rounded-2xl p-3 bg-[#0B0B17]/90 border border-purple-500/15 hover:border-purple-400/50 hover:bg-[#121226] transition-all duration-300 cursor-pointer hover:shadow-[0_8px_25px_rgba(139,92,246,0.2)]"
          >
            {/* Thumbnail Image Container */}
            <div className="relative w-full h-32 sm:h-36 rounded-xl overflow-hidden mb-3 bg-[#080811] border border-purple-500/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B17] via-transparent to-transparent opacity-40" />
            </div>

            {/* Info and Circular Arrow */}
            <div className="flex items-start justify-between gap-2 mt-auto">
              <div className="flex-1 min-w-0 pr-1">
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                  {project.title.split("&")[0].trim()}
                </h4>
                <p className="text-xs text-gray-400 line-clamp-2 mt-0.5 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Circular Action Arrow */}
              <div className="w-8 h-8 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400 transition-all duration-300 group-hover:scale-110 flex-shrink-0 mt-0.5">
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
