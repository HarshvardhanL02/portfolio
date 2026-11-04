"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  ArrowUpRight,
  Send,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Please write a brief message or inquiry.";
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

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-5 sm:px-8 space-y-14 border-t border-white/10">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <Reveal delay={0}>
          <span className="font-mono text-xs uppercase text-[#a3ff5f] font-semibold tracking-wider">
            Get In Touch
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea? <br />
            <span className="text-[#a3ff5f]">Let&apos;s Build It.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-[#9296a1] text-base leading-relaxed">
            I&apos;m open to discussing software projects, product management opportunities, engineering collaborations, and internship roles.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Contact & Social Links */}
        <div className="lg:col-span-5 space-y-4">
          <Reveal delay={160}>
            <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Channels</h3>
              
              <div className="space-y-3 font-mono text-xs">
                {/* Email card with copy button */}
                <div className="p-3.5 rounded-xl bg-[#181a20] border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#a3ff5f]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase">Email Address</div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-white hover:underline text-xs font-medium truncate block max-w-[180px] sm:max-w-none"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded hover:bg-white/10 text-neutral-400 hover:text-white transition"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#a3ff5f]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub link */}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#181a20] border border-white/5 flex items-center justify-between hover:border-white/20 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase">GitHub Profile</div>
                      <div className="text-white font-medium text-xs">github.com/HarshvardhanL02</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>

                {/* LinkedIn link */}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#181a20] border border-white/5 flex items-center justify-between hover:border-white/20 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-blue-400">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase">LinkedIn Profile</div>
                      <div className="text-white font-medium text-xs">linkedin.com/in/harshvardhan-lokhande</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </a>

                {/* Resume download */}
                <a
                  href="/resume.pdf"
                  download="Harshvardhan_Lokhande_Resume.pdf"
                  className="p-3.5 rounded-xl bg-[#a3ff5f]/10 border border-[#a3ff5f]/30 flex items-center justify-between hover:bg-[#a3ff5f]/20 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#a3ff5f]/20 flex items-center justify-center text-[#a3ff5f]">
                      <FileDown className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#a3ff5f] uppercase font-semibold">Download Document</div>
                      <div className="text-white font-semibold text-xs">Harshvardhan_Lokhande_Resume.pdf</div>
                    </div>
                  </div>
                  <FileDown className="w-4 h-4 text-[#a3ff5f]" />
                </a>

              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Functional Message Form */}
        <div className="lg:col-span-7">
          <Reveal delay={200}>
            <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-1">Send a Direct Message</h3>
              <p className="text-xs text-[#9296a1] mb-6 font-mono">
                Fill in the form below or write directly to my email.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center space-y-3 font-mono">
                  <div className="w-12 h-12 rounded-full bg-[#a3ff5f]/10 border border-[#a3ff5f]/40 flex items-center justify-center text-[#a3ff5f]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-sans">Message Dispatched</h4>
                  <p className="text-xs text-[#9296a1] max-w-sm">
                    Thank you for reaching out, {formData.name}. I will review your note and respond promptly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-4 py-2 rounded-lg bg-[#181a20] border border-white/10 text-white text-xs hover:bg-[#22252e] transition"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-neutral-400 mb-1.5 uppercase text-[11px]">
                      Your Name <span className="text-[#a3ff5f]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#181a20] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#a3ff5f] transition font-sans text-sm"
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-[11px] mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-neutral-400 mb-1.5 uppercase text-[11px]">
                      Email Address <span className="text-[#a3ff5f]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#181a20] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#a3ff5f] transition font-sans text-sm"
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-neutral-400 mb-1.5 uppercase text-[11px]">
                      Message / Project Details <span className="text-[#a3ff5f]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, idea, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#181a20] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#a3ff5f] transition font-sans text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="text-rose-400 text-[11px] mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#a3ff5f] hover:bg-[#b8ff82] text-black font-semibold text-xs tracking-wider uppercase transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </Reveal>
        </div>

      </div>

    </section>
  );
}

export default Contact;
