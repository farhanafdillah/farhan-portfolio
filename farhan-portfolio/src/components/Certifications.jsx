"use client";
import { useLang } from "@/context/LangContext";
import { certifications } from "@/data/data";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInView from "@/components/ui/FadeInView";
import { Award, Globe } from "lucide-react";

export default function Certifications() {
  const { t } = useLang();
  return (
    <section id="certifications" className="py-24 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <SectionTitle>{t(certifications.title)}</SectionTitle>
        </FadeInView>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certs */}
          <FadeInView delay={100}>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">
                {t({ id: "Sertifikasi", en: "Certifications" })}
              </h3>
              <div className="space-y-4">
                {certifications.certs.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300"
                  >
                    <span
                      className="mt-0.5 p-2 rounded-lg text-cyan-500 flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15))",
                      }}
                    >
                      <Award size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {cert.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          {/* Languages */}
          <FadeInView delay={200}>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">
                {t({ id: "Bahasa", en: "Languages" })}
              </h3>
              <div className="space-y-4">
                {certifications.languages.map((langItem, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/40 hover:shadow-lg transition-all duration-300"
                  >
                    <span
                      className="p-2 rounded-lg text-cyan-500 flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(37,99,235,0.15))",
                      }}
                    >
                      <Globe size={20} />
                    </span>
                    <div className="flex-1 flex justify-between items-center">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {t(langItem.lang)}
                      </p>
                      <span
                        className="text-xs px-2 py-1 rounded-full border border-blue-500/20 text-blue-600 dark:text-blue-400"
                        style={{ background: "rgba(59,130,246,0.08)" }}
                      >
                        {t(langItem.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
