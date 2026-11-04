"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import ContactModal from "@/components/modals/ContactModal";
import ProjectDetailModal from "@/components/modals/ProjectDetailModal";
import AboutModal from "@/components/modals/AboutModal";
import { projects } from "@/data/portfolioData";

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#080811] text-gray-100 bg-grid-pattern overflow-hidden selection:bg-purple-600 selection:text-white">
      {/* Ambient background glowing orbs */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-1/4 right-10 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 left-10 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Navigation */}
      <Navbar onOpenContact={() => setContactModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenIntro={() => setAboutModalOpen(true)} />

      {/* Futuristic Bento Grid Layout */}
      <BentoGrid
        onLearnMore={() => setAboutModalOpen(true)}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onViewAllProjects={() => setSelectedProject(projects[0])}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Minimalist Futuristic Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenContact={() => setContactModalOpen(true)}
      />
    </div>
  );
}
