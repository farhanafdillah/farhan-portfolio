"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mail, MessageCircle, Check } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#0D0D1C] border border-purple-500/30 p-6 sm:p-8 shadow-[0_20px_60px_rgba(139,92,246,0.25)] z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="mb-6">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">
              Get In Touch
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Let's build something great
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Reach out directly or send a message below.
            </p>
          </div>

          {/* Quick Contact Links */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:border-purple-400 text-purple-200 text-xs font-medium transition-all hover:scale-[1.02]"
            >
              <Mail size={16} className="text-purple-400" />
              <span className="truncate">{personalInfo.email}</span>
            </a>

            <a
              href={`https://wa.me/${personalInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-400 text-emerald-200 text-xs font-medium transition-all hover:scale-[1.02]"
            >
              <MessageCircle size={16} className="text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe / HR Recruiter"
                className="w-full px-4 py-2.5 rounded-xl bg-[#141426] border border-purple-500/20 focus:border-purple-400 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="recruiter@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#141426] border border-purple-500/20 focus:border-purple-400 text-sm text-white placeholder-gray-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hello Farhan, we would like to invite you for an interview..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#141426] border border-purple-500/20 focus:border-purple-400 text-sm text-white placeholder-gray-500 focus:outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-purple hover:bg-gradient-purple-hover text-white text-sm font-semibold transition-all hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] cursor-pointer disabled:opacity-50"
            >
              {sent ? (
                <>
                  <Check size={16} />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
