"use client";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import Badge from "@/components/ui/Badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetailClient({ project }) {
  const { t } = useLang();

  const Section = ({ title, children }) => (
    <div className="mb-8">
      <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{children}</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-4 md:px-8 min-h-screen bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-500 transition-colors mb-8 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
          >
            <ArrowLeft size={16} />
            {t({ id: "Kembali ke Beranda", en: "Back to Home" })}
          </Link>

          {/* Hero image */}
          <div
            className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15))",
            }}
          >
            <Image
              src={project.image}
              alt={t(project.title)}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            {t(project.title)}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-10">
            {t(project.summary)}
          </p>

          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <Section title={t({ id: "Masalah", en: "Problem" })}>
              {t(project.detail.problem)}
            </Section>
            <Section title={t({ id: "Solusi", en: "Solution" })}>
              {t(project.detail.solution)}
            </Section>
            <Section title={t({ id: "Hasil", en: "Result" })}>
              {t(project.detail.result)}
            </Section>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)" }}
            >
              <ExternalLink size={16} /> Demo
            </a>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-gray-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <Github size={16} /> Source Code
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
