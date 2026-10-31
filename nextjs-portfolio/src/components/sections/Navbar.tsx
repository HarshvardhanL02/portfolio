"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, ArrowUpRight, FileDown } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0b]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="text-sm font-semibold tracking-tight text-white transition-colors hover:text-[#3b82f6]"
          >
            Harshvardhan Lokhande
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative rounded-lg px-3.5 py-2 text-[13px] font-medium text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/resume.pdf"
              download="Harshvardhan_Lokhande_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-mono text-[#a3a3a8] hover:text-white hover:border-[#3b82f6]/50 transition-all"
              title="Download Resume PDF"
            >
              <FileDown className="h-3.5 w-3.5 text-[#3b82f6]" />
              <span>Resume</span>
            </a>
            <a
              href="https://github.com/HarshvardhanL02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group inline-flex items-center gap-1.5 rounded-lg bg-[#3b82f6] px-4 py-2 text-[13px] font-medium text-white transition-all hover:bg-[#2563eb] hover:shadow-lg hover:shadow-[#3b82f6]/20"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="border-b border-white/[0.08] bg-[#0a0a0b]/95 backdrop-blur-2xl md:hidden px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
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
