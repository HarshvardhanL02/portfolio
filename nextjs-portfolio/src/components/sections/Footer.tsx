"use client";

import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-7">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-sm text-[#6b6b70]">
            © {new Date().getFullYear()} {siteConfig.name}
          </span>
          <div className="flex gap-6">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a3a3a8] hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a3a3a8] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.twinsparktech}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#a3a3a8] hover:text-white transition-colors"
            >
              TwinSparkTech
            </a>
            <a
              href="#top"
              className="text-sm text-[#a3a3a8] hover:text-white transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

