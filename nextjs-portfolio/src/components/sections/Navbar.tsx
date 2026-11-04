"use client";

import { useState, useEffect } from "react";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
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
          ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/40"
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Authentic name branding */}
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, "#top")}
            className="flex items-center gap-2 group"
          >
            <span className="font-sans text-sm font-bold tracking-tight text-white hover:text-neutral-300 transition-colors">
              Harshvardhan Lokhande
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-1 md:flex font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-lg px-3.5 py-1.5 text-[#9296a1] hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden items-center gap-3 md:flex font-mono text-xs">
            <a
              href="https://github.com/HarshvardhanL02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-[#9296a1] hover:text-white hover:border-white/20 transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#a3ff5f] px-3.5 py-1.5 font-semibold text-black transition-all hover:bg-[#b8ff82]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="border-b border-white/[0.08] bg-[#09090b]/98 backdrop-blur-2xl md:hidden px-6 py-4 space-y-2 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block py-2 text-[#9296a1] hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex-1 text-center py-2 rounded bg-[#a3ff5f] text-black font-semibold"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
