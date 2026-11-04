"use client";

import AboutCard from "@/components/bento/AboutCard";
import SkillsCard from "@/components/bento/SkillsCard";
import StatsCard from "@/components/bento/StatsCard";
import ProjectsCard from "@/components/bento/ProjectsCard";
import ContactCard from "@/components/bento/ContactCard";

export default function BentoGrid({
  onLearnMore,
  onSelectProject,
  onViewAllProjects,
  onOpenContact,
}) {
  return (
    <div className="py-10 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Row 1: About Me (4 cols), My Skills (4 cols), Stats (4 cols) */}
          <div id="about" className="lg:col-span-4 flex flex-col scroll-mt-28">
            <AboutCard onLearnMore={onLearnMore} />
          </div>

          <div id="skills" className="lg:col-span-4 flex flex-col scroll-mt-28">
            <SkillsCard />
          </div>

          <div className="lg:col-span-4 flex flex-col scroll-mt-28">
            <StatsCard />
          </div>

          {/* Row 2: Projects (8 cols / ~65%), Contact (4 cols / ~35%) */}
          <div id="projects" className="lg:col-span-8 flex flex-col scroll-mt-28">
            <ProjectsCard
              onSelectProject={onSelectProject}
              onViewAll={onViewAllProjects}
            />
          </div>

          <div id="contact" className="lg:col-span-4 flex flex-col scroll-mt-28">
            <ContactCard onOpenContact={onOpenContact} />
          </div>
        </div>
      </div>
    </div>
  );
}
