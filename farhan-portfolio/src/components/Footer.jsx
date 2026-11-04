"use client";
import { useLang } from "@/context/LangContext";
import { footer, siteConfig, navLinks } from "@/data/data";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="py-10 px-4 md:px-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-bold text-cyan-500">
          {siteConfig.name.split(" ")[0]}
          <span className="text-blue-600 dark:text-blue-400">.dev</span>
        </span>
        <p className="text-sm text-gray-400 dark:text-gray-500 text-center">
          {t(footer.text)}
        </p>
        <nav className="flex gap-4">
          {navLinks.slice(0, 4).map((link) => (
            <button
              key={link.id}
              onClick={() =>
                document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-xs text-gray-400 dark:text-gray-500 hover:text-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded"
            >
              {t(link.label)}
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
}
