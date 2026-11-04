"use client";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { hero, siteConfig } from "@/data/data";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 relative overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Background gradient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl -z-10"
        style={{ background: "rgba(6,182,212,0.08)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10"
        style={{ background: "rgba(37,99,235,0.08)" }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div
          className="text-center md:text-left space-y-6"
          style={{ animation: "fadeIn 0.8s ease-out forwards" }}
        >
          <p className="text-cyan-500 font-semibold tracking-widest text-sm uppercase">
            {t(hero.greeting)}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            {hero.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-lg mx-auto md:mx-0">
            {t(hero.tagline)}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)" }}
            >
              <ExternalLink size={16} />
              {t(hero.cta.projects)}
            </button>
            <a
              href={siteConfig.cv}
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-cyan-500 text-cyan-500 dark:text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <Download size={16} />
              {t(hero.cta.cv)}
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-72 md:h-72">
            <div
              className="absolute inset-0 rounded-full blur-md opacity-30 scale-105"
              style={{ background: "linear-gradient(135deg, #06b6d4, #2563eb)" }}
            />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/40 shadow-2xl">
              <Image
                src={hero.avatar}
                alt={`Foto profil ${hero.name}`}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-cyan-500 transition-colors focus:outline-none"
        style={{ animation: "bounce 1s infinite" }}
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
