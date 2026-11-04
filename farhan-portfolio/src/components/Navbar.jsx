"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Top detection
      if (window.scrollY < 200) {
        setActiveSection("home");
        return;
      }

      // Bottom detection
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150
      ) {
        setActiveSection("contact");
        return;
      }

      // Detect active section based on section elements
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#080811]/90 backdrop-blur-xl border-b border-purple-500/15 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-1.5 group cursor-pointer focus:outline-none"
          >
            <span className="font-extrabold text-xl tracking-wider text-purple-400 group-hover:text-purple-300 transition-colors">
              F/
            </span>
            <span className="font-bold text-base sm:text-lg text-white group-hover:text-purple-200 transition-colors">
              Farhan Bayna Afdillah
            </span>
          </button>

          {/* Desktop Nav Links (Pills Center) */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#121224]/80 border border-purple-500/20 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full -z-10 shadow-[0_0_18px_rgba(139,92,246,0.6)]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-5 py-2 text-sm font-medium text-purple-200 rounded-full border border-purple-500/40 bg-purple-500/10 hover:bg-purple-600 hover:text-white hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-6 rounded-2xl bg-[#0F0F1E]/95 border border-purple-500/30 backdrop-blur-2xl shadow-2xl flex flex-col gap-3"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-purple-600/30 text-purple-300 border border-purple-500/30"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
