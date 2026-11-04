"use client";
import { useLang } from "@/context/LangContext";
import { skills } from "@/data/data";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInView from "@/components/ui/FadeInView";
import { Network, Smartphone, Wrench, Users } from "lucide-react";

const iconMap = { Network, Smartphone, Wrench, Users };

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <SectionTitle>{t(skills.title)}</SectionTitle>
        </FadeInView>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <FadeInView key={i} delay={i * 100}>
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="p-2.5 rounded-xl text-cyan-500 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15))",
                      }}
                    >
                      {Icon && <Icon size={22} />}
                    </span>
                    <h3 className="font-bold text-gray-800 dark:text-white">{t(cat.name)}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-medium rounded-full border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                        style={{ background: "rgba(6,182,212,0.08)" }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
