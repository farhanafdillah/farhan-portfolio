"use client";

import AboutCard from "@/components/bento/AboutCard";
import SkillsCard from "@/components/bento/SkillsCard";
import StatsCard from "@/components/bento/StatsCard";
import ProjectsCard from "@/components/bento/ProjectsCard";
import ContactCard from "@/components/bento/ContactCard";
import { allSkillsDetailed } from "@/data/portfolioData";
import { Sparkles, Terminal } from "lucide-react";

export default function BentoGrid({
  onLearnMore,
  onSelectProject,
  onViewAllProjects,
  onOpenContact,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24 pb-20">
      {/* SECTION 1: ABOUT & STATS */}
      <section id="about" className="scroll-mt-28">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={16} className="text-purple-400" />
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold">
            Overview
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          <div className="lg:col-span-7 flex flex-col">
            <AboutCard onLearnMore={onLearnMore} />
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <StatsCard />
          </div>
        </div>
      </section>

      {/* SECTION 2: SKILLS & TECH STACK */}
      <section id="skills" className="scroll-mt-28">
        <div className="flex items-center gap-2 mb-4">
          <Terminal size={16} className="text-purple-400" />
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase font-semibold">
            Technical Stack
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Main 8 Tech Icons Bento Card */}
          <div className="lg:col-span-6 flex flex-col">
            <SkillsCard />
          </div>

          {/* Detailed Skill Categories Card */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="bento-card p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Specialized Competencies
                </h3>
                <span className="text-[11px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
                  Full Spectrum
                </span>
              </div>

              <div className="space-y-3.5 flex-1 flex flex-col justify-center">
                {allSkillsDetailed.map((group) => (
                  <div key={group.category} className="space-y-1.5">
                    <span className="text-xs font-semibold text-purple-300">
                      {group.category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#0F0F20] text-gray-300 border border-purple-500/15 hover:border-purple-400/40 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section id="projects" className="scroll-mt-28">
        <ProjectsCard
          onSelectProject={onSelectProject}
          onViewAll={onViewAllProjects}
        />
      </section>

      {/* SECTION 4: GET IN TOUCH */}
      <section id="contact" className="scroll-mt-28">
        <ContactCard onOpenContact={onOpenContact} />
      </section>
    </div>
  );
}
