"use client";

import { heroData, siteConfig } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, FileDown } from "lucide-react";

export function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0a0a0b]"
    >
      {/* Animated glow orbs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full bg-[#3b82f6]/[0.08] blur-[120px] animate-pulse" />
        <div className="absolute -right-20 top-1/3 h-[420px] w-[420px] rounded-full bg-[#8b5cf6]/[0.06] blur-[110px] animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-10 left-1/2 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#3b82f6]/[0.04] blur-[140px] animate-pulse [animation-delay:4s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-[calc(60px+4rem)] pb-20 text-center">
        {/* Tag */}
        <Reveal delay={0}>
          <div className="mb-6 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <span className="font-mono text-xs tracking-wide text-neutral-400">
              MIT Academy of Engineering, Pune — B.E. Mechanical Engineering, 2025–2029
            </span>
          </div>
        </Reveal>

        {/* Role */}
        <Reveal delay={80}>
          <p className="mb-4 text-sm font-semibold tracking-wide text-[#3b82f6] sm:text-base">
            Mechanical Engineering Student | Software Developer | Product &amp; Technology
          </p>
        </Reveal>

        {/* Name */}
        <Reveal delay={160}>
          <h1 className="mb-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08] tracking-tight text-white">
            <span className="text-gradient">Harshvardhan Lokhande</span>
          </h1>
        </Reveal>

        {/* Lede */}
        <Reveal delay={240}>
          <p className="mb-10 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-400">
            {heroData.lede}
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={320}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0a0a0b] transition-all hover:bg-neutral-200 hover:shadow-lg hover:shadow-white/10"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download="Harshvardhan_Lokhande_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-[#3b82f6]/40 bg-[#3b82f6]/10 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#3b82f6] hover:bg-[#3b82f6]/20"
            >
              <FileDown className="h-4 w-4 text-[#60a5fa]" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/[0.24] hover:bg-white/[0.04]"
            >
              <span>Get in Touch</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0a0b] to-transparent" />
    </section>
  );
}

export default Hero;
