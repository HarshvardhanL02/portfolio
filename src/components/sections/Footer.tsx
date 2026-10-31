"use client";

import { siteConfig } from "@/lib/data";
import { ArrowUp, Terminal, Shield } from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

export function Footer() {
  const scrollToTop = () => {
    sound.playWarp();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 py-12 px-5 sm:px-8 bg-[#050507] relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-mono text-xs text-[#38bdf8] uppercase tracking-[0.2em] mb-1">
              THE DIGITAL ENGINEERING UNIVERSE
            </span>
            <h4 className="text-lg font-bold text-white tracking-tight">
              Harshvardhan Lokhande
            </h4>
            <p className="font-mono text-xs text-[#6b6b70] mt-1">
              Mechanical Engineering · Software Development · Product Builder
            </p>
          </div>

          {/* Telemetry Coordinates */}
          <div className="font-mono text-[11px] text-[#6b6b70] text-center md:text-right space-y-1">
            <p>FACILITY LOCATION: ALANDI, PUNE, MAHARASHTRA</p>
            <p className="text-[#a3a3a8]">COORDINATES: 18.6757° N, 73.8893° E</p>
            <p className="text-[#10b981]">SYSTEM INTEGRITY: 100% // ALL SECTORS NOMINAL</p>
          </div>
        </div>

        {/* Bottom copyright & links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6b6b70]">
          <p>© {new Date().getFullYear()} Harshvardhan Lokhande. All systems operational.</p>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.twinsparktech}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors text-[#38bdf8]"
            >
              TwinSparkTech
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#38bdf8] transition-colors"
            >
              <span>Warp to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
