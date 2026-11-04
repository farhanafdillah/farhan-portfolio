import { projects, siteConfig } from "@/data/data";
import { notFound } from "next/navigation";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export async function generateStaticParams() {
  return projects.items.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const p = await params;
  const project = projects.items.find((item) => item.slug === p.slug);
  if (!project) return {};
  return {
    title: `${project.title.id} — ${siteConfig.name}`,
    description: project.summary.id,
  };
}

export default async function ProjectPage({ params }) {
  const p = await params;
  const project = projects.items.find((item) => item.slug === p.slug);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
