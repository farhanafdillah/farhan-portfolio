"use client";
import { useLang } from "@/context/LangContext";
import { projects } from "@/data/data";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInView from "@/components/ui/FadeInView";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const { t } = useLang();
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <SectionTitle>{t(projects.title)}</SectionTitle>
        </FadeInView>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, i) => (
            <FadeInView key={project.slug} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
