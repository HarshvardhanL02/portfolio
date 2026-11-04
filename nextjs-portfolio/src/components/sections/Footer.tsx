"use client";

import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 font-mono text-xs text-[#9296a1]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a3ff5f]" />
            <span className="text-white font-medium">Harshvardhan Lokhande</span>
            <span className="text-neutral-500">•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
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
              className="hover:text-[#a3ff5f] transition-colors"
            >
              TwinSparkTech
            </a>
            <a
              href="#top"
              className="hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
