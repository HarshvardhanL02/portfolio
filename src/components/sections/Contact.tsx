"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Globe,
  Mail,
  Phone,
  FileDown,
  Send,
  Radio,
} from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Identification required";
    if (!formData.email.trim()) {
      errs.email = "Email coordinate required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Valid communication coordinate required";
    }
    if (!formData.message.trim()) errs.message = "Transmission payload required";
    return errs;
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    // Real transmission: Open user's email client with pre-filled content
    const subject = encodeURIComponent(`Engineering Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#38bdf8] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                SECTOR 07 // FINAL DIGITAL TRANSMISSION CHAMBER
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Have an interesting problem? Let&apos;s engineer something.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-sm text-[#a3a3a8] max-w-md font-mono">
              Open to conversations regarding software engineering, mechanical design, internal
              tooling, product management, and technical internships.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Grid: Direct Communication Grid & Transmission Console */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Direct Communication Channels */}
          <div className="space-y-4">
            {/* Email Channel */}
            <Reveal delay={120}>
              <a
                href={`mailto:${siteConfig.email}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group flex items-center justify-between p-5 bg-[#111113]/85 border border-white/10 rounded-2xl hover:border-[#3b82f6] hover:bg-[#17171a] transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#6b6b70] uppercase tracking-wider">
                      PRIMARY TRANSMISSION // EMAIL
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      {siteConfig.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6b6b70] group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </Reveal>

            {/* Phone Channel */}
            <Reveal delay={180}>
              <a
                href={`tel:${siteConfig.phone}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group flex items-center justify-between p-5 bg-[#111113]/85 border border-white/10 rounded-2xl hover:border-[#38bdf8] hover:bg-[#17171a] transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/30 flex items-center justify-center text-[#06b6d4] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#6b6b70] uppercase tracking-wider">
                      TELEPHONE PROTOCOL // DIRECT
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      +91 {siteConfig.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6b6b70] group-hover:text-[#06b6d4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </Reveal>

            {/* LinkedIn Channel */}
            <Reveal delay={240}>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group flex items-center justify-between p-5 bg-[#111113]/85 border border-white/10 rounded-2xl hover:border-[#3b82f6] hover:bg-[#17171a] transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/30 flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#6b6b70] uppercase tracking-wider">
                      PROFESSIONAL NETWORK // LINKEDIN
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      linkedin.com/in/harshvardhan-lokhande
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6b6b70] group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </Reveal>

            {/* GitHub Channel */}
            <Reveal delay={300}>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group flex items-center justify-between p-5 bg-[#111113]/85 border border-white/10 rounded-2xl hover:border-white/30 hover:bg-[#17171a] transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#6b6b70] uppercase tracking-wider">
                      OPEN SOURCE ARCHIVES // GITHUB
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      github.com/HarshvardhanL02
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#6b6b70] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </Reveal>

            {/* Resume Download Channel */}
            <Reveal delay={360}>
              <a
                href="/resume.pdf"
                download="Harshvardhan_Lokhande_Resume.pdf"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group flex items-center justify-between p-5 bg-gradient-to-r from-[#3b82f6]/10 to-[#06b6d4]/10 border border-[#3b82f6]/40 rounded-2xl hover:border-[#3b82f6] hover:bg-[#3b82f6]/15 transition-all backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#3b82f6] flex items-center justify-center text-white shadow-lg shadow-[#3b82f6]/30 group-hover:scale-105 transition-transform">
                    <FileDown className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-wider">
                      DOCUMENT ARCHIVE // RESUME
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-white">
                      Download PDF Resume (Updated 2026)
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#93c5fd] px-3 py-1 rounded-md bg-[#3b82f6]/20 border border-[#3b82f6]/30">
                  LATEST PDF ↗
                </span>
              </a>
            </Reveal>
          </div>

          {/* Interactive Quantum Transmission Console */}
          <div>
            <Reveal delay={200}>
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111113]/85 backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#38bdf8] animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-white">
                      DIRECT TRANSMISSION TERMINAL
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#6b6b70]">
                    PROTOCOL: MAILTO CLIENT
                  </span>
                </div>

                <form onSubmit={handleTransmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#6b6b70] mb-1.5">
                      IDENTIFICATION // YOUR NAME
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Alex Mercer"
                      className="w-full px-4 py-3 bg-[#17171a] border border-white/10 rounded-xl text-white placeholder-[#4b4b50] text-sm focus:outline-none focus:border-[#38bdf8] font-mono transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#6b6b70] mb-1.5">
                      COMMUNICATION COORDINATE // YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 bg-[#17171a] border border-white/10 rounded-xl text-white placeholder-[#4b4b50] text-sm focus:outline-none focus:border-[#38bdf8] font-mono transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-[#6b6b70] mb-1.5">
                      TRANSMISSION PAYLOAD // MESSAGE
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter project inquiry, engineering problem, or collaboration request..."
                      className="w-full px-4 py-3 bg-[#17171a] border border-white/10 rounded-xl text-white placeholder-[#4b4b50] text-sm focus:outline-none focus:border-[#38bdf8] font-mono transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#3b82f6]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    <span>Transmit Message (Direct Mailto)</span>
                  </button>

                  <p className="text-[11px] font-mono text-[#6b6b70] text-center pt-2">
                    Direct transmission launches your email client with verified parameters. No
                    fake confirmations.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
