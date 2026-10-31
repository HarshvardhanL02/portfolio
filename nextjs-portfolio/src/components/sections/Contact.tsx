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
  CheckCircle2,
  Send,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/10 relative">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Direct info & links */}
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b70] mb-4">
                Contact
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let&apos;s Connect
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[#a3a3a8] text-base leading-relaxed mb-8 max-w-lg">
                I work at the intersection of mechanical engineering, software development,
                automation, and product management. I&apos;m always open to discussing new
                projects, engineering problems, or internship opportunities.
              </p>
            </Reveal>

            {/* Direct Links Grid */}
            <div className="space-y-3">
              <Reveal delay={200}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center justify-between p-4 bg-[#111113] border border-white/10 rounded-xl hover:border-[#3b82f6]/40 hover:bg-[#17171a] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#6b6b70] uppercase tracking-wider">Email</p>
                      <p className="text-sm font-medium text-white">{siteConfig.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6b6b70] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </Reveal>

              <Reveal delay={260}>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-[#111113] border border-white/10 rounded-xl hover:border-[#3b82f6]/40 hover:bg-[#17171a] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#6b6b70] uppercase tracking-wider">GitHub</p>
                      <p className="text-sm font-medium text-white">github.com/HarshvardhanL02</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6b6b70] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </Reveal>

              <Reveal delay={320}>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-[#111113] border border-white/10 rounded-xl hover:border-[#3b82f6]/40 hover:bg-[#17171a] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 flex items-center justify-center text-[#38bdf8]">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#6b6b70] uppercase tracking-wider">LinkedIn</p>
                      <p className="text-sm font-medium text-white">linkedin.com/in/harshvardhan-lokhande</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6b6b70] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </Reveal>

              <Reveal delay={380}>
                <a
                  href={siteConfig.twinsparktech}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-[#111113] border border-white/10 rounded-xl hover:border-[#3b82f6]/40 hover:bg-[#17171a] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center text-[#818cf8]">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#6b6b70] uppercase tracking-wider">Flagship Ecosystem</p>
                      <p className="text-sm font-medium text-white">twinsparktech.online</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6b6b70] group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </Reveal>

              {/* Resume download button */}
              <Reveal delay={440}>
                <a
                  href="/resume.pdf"
                  download="Harshvardhan_Lokhande_Resume.pdf"
                  className="group flex items-center justify-between p-4 bg-gradient-to-r from-[#3b82f6]/10 to-[#6366f1]/10 border border-[#3b82f6]/30 rounded-xl hover:border-[#3b82f6] transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6] flex items-center justify-center text-white shadow-lg shadow-[#3b82f6]/30">
                      <FileDown className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#60a5fa] uppercase tracking-wider">Updated Resume</p>
                      <p className="text-sm font-medium text-white">Download PDF Resume</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#93c5fd] px-2.5 py-1 bg-[#3b82f6]/20 rounded-md border border-[#3b82f6]/30">
                    Latest 2026
                  </span>
                </a>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div>
            <Reveal delay={180}>
              <div className="bg-[#111113] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

                <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>
                <p className="text-sm text-[#a3a3a8] mb-6">
                  Have a question or proposal? Drop me a direct message below.
                </p>

                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e] mb-4">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Message Received!</h4>
                    <p className="text-sm text-[#a3a3a8] max-w-xs mb-6">
                      Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-mono text-[#3b82f6] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#6b6b70] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#17171a] border border-white/10 rounded-xl text-white placeholder-[#4b4b50] text-sm focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                      {errors.name && (
                        <p className="text-xs text-rose-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#6b6b70] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-[#17171a] border border-white/10 rounded-xl text-white placeholder-[#4b4b50] text-sm focus:outline-none focus:border-[#3b82f6] transition-colors"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#6b6b70] mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your note, question, or project inquiry..."
                        className="w-full px-4 py-3 bg-[#17171a] border border-white/10 rounded-xl text-white placeholder-[#4b4b50] text-sm focus:outline-none focus:border-[#3b82f6] transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-rose-400 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-white text-[#0a0a0b] font-semibold text-sm hover:bg-[#3b82f6] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-white/5 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

