"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/BrandIcons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/modals/ContactModal";

export default function ProjectDetailClient({ project }) {
  const [contactOpen, setContactOpen] = useState(false);

  const Section = ({ title, children }) => (
    <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#121224] border border-purple-500/15">
      <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-base">
        {children}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#080811] text-gray-100 bg-grid-pattern">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main className="pt-28 pb-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors mb-8 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 w-fit"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Hero image */}
        <div className="relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden mb-8 border border-purple-500/20 shadow-[0_0_40px_rgba(139,92,246,0.2)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-400 mb-10 text-justify leading-relaxed">
          {project.summary}
        </p>

        <div className="space-y-4">
          <Section title="Problem & Challenges">
            {project.detail.problem}
          </Section>
          <Section title="Engineering Solution">
            {project.detail.solution}
          </Section>
          <Section title="Key Results & Impact">
            {project.detail.result}
          </Section>
        </div>

        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-purple hover:bg-gradient-purple-hover text-white font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
          >
            <Github size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      </main>

      <Footer />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
