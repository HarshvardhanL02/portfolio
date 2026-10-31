"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, ArrowUpRight, FileDown, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

const navLinks = [
  { label: "Core", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  onReplayIntro?: () => void;
}

export function Navbar({ onReplayIntro }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    sound.playWarp();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleSound = () => {
    const state = sound.toggle();
    setAudioEnabled(state);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050507]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with 3D Monogram & Status Pill */}
          <div className="flex items-center gap-3">
            <a
              href="#top"
              onClick={(e) => handleNavClick(e, "#top")}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#06b6d4] flex items-center justify-center font-sans font-bold text-xs text-white shadow-lg shadow-[#3b82f6]/30 group-hover:scale-105 transition-transform">
                HL
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#3b82f6] transition-colors">
                  Harshvardhan Lokhande
                </span>
                <span className="font-mono text-[9px] text-[#6b6b70] tracking-wider uppercase hidden sm:inline">
                  Digital Engineering Universe
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-2 ml-4 px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="font-mono text-[10px] text-[#6b6b70] tracking-widest uppercase">
                SYS: 60 FPS
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#111113]/60 border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => sound.playHover()}
                className="relative rounded-full px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-[#a3a3a8] transition-colors hover:text-white hover:bg-white/[0.05]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio FX Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => sound.playHover()}
              className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 ${
                audioEnabled
                  ? "border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[#60a5fa]"
                  : "border-white/10 bg-white/[0.02] text-[#6b6b70] hover:text-white"
              }`}
              title={audioEnabled ? "Sound FX: ON" : "Sound FX: MUTED"}
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="font-mono text-[10px] uppercase hidden lg:inline">
                {audioEnabled ? "SFX" : "MUTE"}
              </span>
            </button>

            {/* Replay Intro */}
            {onReplayIntro && (
              <button
                onClick={() => {
                  sound.playClick();
                  onReplayIntro();
                }}
                className="p-2 rounded-lg border border-white/10 bg-white/[0.02] text-[#6b6b70] hover:text-white transition-colors"
                title="Replay Cinematic Intro"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="Harshvardhan_Lokhande_Resume.pdf"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-[#a3a3a8] hover:text-white hover:border-[#3b82f6]/50 transition-all"
            >
              <FileDown className="h-3.5 w-3.5 text-[#3b82f6]" />
              <span>Resume</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/HarshvardhanL02"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="p-2 rounded-lg text-[#a3a3a8] hover:text-white hover:bg-white/[0.05] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>

            {/* Let's Connect CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              onMouseEnter={() => sound.playHover()}
              className="group inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-[#3b82f6]/25 hover:shadow-[#3b82f6]/40 hover:scale-[1.02] transition-all"
            >
              <span>Connect</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={toggleSound}
              className="p-2 text-[#a3a3a8]"
              aria-label="Toggle sound"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-[#3b82f6]" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-b border-white/[0.08] bg-[#050507]/95 backdrop-blur-2xl md:hidden px-6 py-5 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block rounded-lg px-3 py-2 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
            <a
              href="/resume.pdf"
              download="Harshvardhan_Lokhande_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#3b82f6]"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="https://github.com/HarshvardhanL02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
