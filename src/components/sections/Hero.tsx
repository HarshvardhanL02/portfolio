"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown, FileDown, Sparkles, Send } from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

export function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    sound.playWarp();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-5 sm:px-8 overflow-hidden"
    >
      {/* HUD Telemetry Framing Brackets */}
      <div className="absolute top-28 left-8 hidden lg:block font-mono text-[10px] text-[#6b6b70] tracking-widest uppercase">
        <p className="text-[#3b82f6]">SECTOR 01 // CORE ENGINE</p>
        <p>ROTATION: PLANETARY DUAL</p>
        <p>MATERIAL: TITANIUM-CHROME</p>
      </div>

      <div className="absolute top-28 right-8 hidden lg:block font-mono text-[10px] text-[#6b6b70] tracking-widest uppercase text-right">
        <p className="text-[#06b6d4]">COORDS: 18.6757° N, 73.8893° E</p>
        <p>FACILITY: MITAOE PUNE</p>
        <p>SYSTEM: ONLINE</p>
      </div>

      {/* Hero Typography Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Status Tag */}
        <Reveal delay={0}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#111113]/80 px-4 py-1.5 backdrop-blur-md shadow-lg shadow-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-[#a3a3a8] uppercase">
              B.E. Mechanical Engineering · MITAOE, Pune (2025–2029)
            </span>
          </div>
        </Reveal>

        {/* Roles Subtitle */}
        <Reveal delay={80}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4 font-mono text-xs sm:text-sm tracking-widest uppercase text-[#38bdf8]">
            <span>Mechanical Engineering Student</span>
            <span className="text-white/20">/</span>
            <span>Software Developer</span>
            <span className="text-white/20">/</span>
            <span>Product Builder</span>
          </div>
        </Reveal>

        {/* Main Name Heading */}
        <Reveal delay={160}>
          <h1 className="mb-6 text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-none">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e2e8f0] to-[#94a3b8]">
              HARSHVARDHAN
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#06b6d4] drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]">
              LOKHANDE
            </span>
          </h1>
        </Reveal>

        {/* Headline */}
        <Reveal delay={240}>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4 max-w-2xl">
            &ldquo;I don&apos;t just build applications. I engineer systems.&rdquo;
          </p>
        </Reveal>

        {/* Supporting Description */}
        <Reveal delay={320}>
          <p className="text-sm sm:text-base text-[#a3a3a8] max-w-2xl leading-relaxed mb-10">
            Building software products, digital infrastructure, automation systems and
            engineering solutions at the intersection of mechanical design and computing.
          </p>
        </Reveal>

        {/* 3 Call to Action Buttons */}
        <Reveal delay={400}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Explore My Universe */}
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "#projects")}
              onMouseEnter={() => sound.playHover()}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#3b82f6]/30 hover:shadow-[#3b82f6]/50 hover:scale-[1.03] transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Explore My Universe</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download="Harshvardhan_Lokhande_Resume.pdf"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-[#111113]/80 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm hover:border-[#3b82f6]/60 hover:bg-[#17171a] transition-all"
            >
              <FileDown className="w-4 h-4 text-[#38bdf8]" />
              <span>Download Resume</span>
            </a>

            {/* Let's Connect */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-[#a3a3a8] hover:text-white hover:border-white/20 transition-all"
            >
              <Send className="w-4 h-4 text-[#6b6b70]" />
              <span>Let&apos;s Connect</span>
            </a>
          </div>
        </Reveal>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="font-mono text-[9px] text-[#6b6b70] tracking-[0.25em] uppercase">
          SCROLL TO NAVIGATE SECTORS
        </span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#3b82f6] animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
