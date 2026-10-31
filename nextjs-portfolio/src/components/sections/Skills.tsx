"use client";

import { skillsData } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 lg:px-16">
        {/* Header */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b70] mb-4">
            Stack
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 md:mb-16">
            Technologies &amp; Skills
          </h2>
        </Reveal>

        {/* 4-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.map((category, i) => (
            <Reveal key={category.label} delay={120 + i * 80}>
              <div
                className="group relative bg-[#111113] border border-white/10 rounded-xl p-6
                           transition-all duration-300
                           hover:border-[#3b82f6]/40 hover:shadow-[0_0_24px_-6px_rgba(59,130,246,0.15)]"
              >
                {/* Top accent glow bar */}
                <div
                  className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl bg-gradient-to-r
                             from-transparent via-[#3b82f6] to-transparent
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />

                {/* Category label */}
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#6b6b70] mb-4">
                  {category.label}
                </p>

                {/* Skills list */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-[#a3a3a8] flex items-center gap-2
                                 group-hover:text-[#c8c8cc] transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#3b82f6]/60 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
