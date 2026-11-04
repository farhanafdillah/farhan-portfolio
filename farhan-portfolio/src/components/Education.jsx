"use client";
import { useLang } from "@/context/LangContext";
import { education } from "@/data/data";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInView from "@/components/ui/FadeInView";
import { GraduationCap, Users } from "lucide-react";

export default function Education() {
  const { t } = useLang();
  return (
    <section id="education" className="py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <FadeInView>
          <SectionTitle>{t(education.title)}</SectionTitle>
        </FadeInView>
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 opacity-30"
            style={{ background: "linear-gradient(to bottom, #06b6d4, #2563eb)" }}
          />
          <div className="space-y-10">
            {education.items.map((item, i) => (
              <FadeInView key={i} delay={i * 150}>
                <div className="flex gap-6 relative">
                  {/* Dot */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #2563eb)",
                      boxShadow: "0 4px 15px rgba(6,182,212,0.3)",
                    }}
                  >
                    {item.type === "education" ? (
                      <GraduationCap size={20} className="text-white" />
                    ) : (
                      <Users size={20} className="text-white" />
                    )}
                  </div>
                  {/* Card */}
                  <div className="flex-1 p-5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white leading-snug">
                        {t(item.institution)}
                      </h3>
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-full text-cyan-600 dark:text-cyan-400 whitespace-nowrap"
                        style={{ background: "rgba(6,182,212,0.1)" }}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                      {t(item.degree)}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-justify leading-relaxed">
                      {t(item.description)}
                    </p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
