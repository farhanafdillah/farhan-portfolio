"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import Badge from "@/components/ui/Badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";

export default function ProjectCard({ project }) {
  const { t } = useLang();
  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div
        className="relative h-48 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15))",
        }}
      >
        <Image
          src={project.image}
          alt={t(project.title)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          unoptimized
        />
      </div>
      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-snug">
          {t(project.title)}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">
          {t(project.summary)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-700">
          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-cyan-500 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
              aria-label={`Demo ${t(project.title)}`}
            >
              <ExternalLink size={14} /> Demo
            </a>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
              aria-label={`Source code ${t(project.title)}`}
            >
              <Github size={14} /> Source
            </a>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1 text-xs font-semibold text-gray-400 hover:text-cyan-500 transition-colors group/link focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
          >
            Detail{" "}
            <ArrowRight
              size={14}
              className="group-hover/link:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
