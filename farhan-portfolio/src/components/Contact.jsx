"use client";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { contact, siteConfig } from "@/data/data";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeInView from "@/components/ui/FadeInView";
import { Mail, MessageCircle, Send } from "lucide-react";
import { Linkedin, Github } from "@/components/ui/BrandIcons";

export default function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <FadeInView>
          <SectionTitle>{t(contact.title)}</SectionTitle>
        </FadeInView>
        <FadeInView delay={100}>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">
            {t(contact.subtitle)}
          </p>
        </FadeInView>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <FadeInView delay={150}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t(contact.form.name)}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t(contact.form.placeholder.name)}
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t(contact.form.email)}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t(contact.form.placeholder.email)}
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t(contact.form.message)}
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder={t(contact.form.placeholder.message)}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                style={{ background: "linear-gradient(to right, #06b6d4, #2563eb)" }}
              >
                <Send size={16} />
                {sent ? "Message Sent! ✓" : t(contact.form.send)}
              </button>
            </form>
          </FadeInView>

          {/* Social links */}
          <FadeInView delay={250}>
            <div className="flex flex-col gap-4 justify-center">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <span
                  className="p-3 rounded-xl text-cyan-500 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(6,182,212,0.1)" }}
                >
                  <Mail size={22} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wide">
                    Email
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp — button only, no phone number shown in public text */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-green-500/50 hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Direct Chat via WhatsApp"
              >
                <span
                  className="p-3 rounded-xl text-green-500 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(34,197,94,0.1)" }}
                >
                  <MessageCircle size={22} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wide">
                    WhatsApp
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Chat on WhatsApp
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="LinkedIn Profile"
              >
                <span
                  className="p-3 rounded-xl text-blue-500 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(59,130,246,0.1)" }}
                >
                  <Linkedin size={22} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wide">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Farhan Bayna Afdillah
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="GitHub Profile"
              >
                <span
                  className="p-3 rounded-xl text-purple-500 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(168,85,247,0.1)" }}
                >
                  <Github size={22} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wide">
                    GitHub
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    @farhanafdillah
                  </p>
                </div>
              </a>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
