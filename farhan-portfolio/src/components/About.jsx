"use client";
import { useLang } from "@/context/LangContext";
import { about } from "@/data/data";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInView from "@/components/ui/FadeInView";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const iconMap = { GraduationCap, MapPin, Briefcase };

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <SectionTitle>{t(about.title)}</SectionTitle>
        </FadeInView>
        <FadeInView delay={100}>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed text-justify mb-10">
            {t(about.body)}
          </p>
        </FadeInView>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          {about.highlights.map((h, i) => {
            const Icon = iconMap[h.icon];
            return (
              <FadeInView key={i} delay={i * 100 + 200}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg">
                  <span
                    className="p-2 rounded-lg text-cyan-500"
                    style={{ background: "rgba(6,182,212,0.1)" }}
                  >
                    {Icon && <Icon size={20} />}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    {t(h.label)}
                  </span>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
