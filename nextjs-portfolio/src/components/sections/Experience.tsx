"use client";

import { useState } from "react";
import {
  experienceData,
  educationData,
  certificationsData,
} from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, GraduationCap, Building2, Award } from "lucide-react";

const dotColors: Record<string, string> = {
  work: "bg-[#3b82f6]",
  education: "bg-[#22c55e]",
  project: "bg-[#a855f7]",
};

const dotGlow: Record<string, string> = {
  work: "shadow-[0_0_8px_2px_rgba(59,130,246,0.4)]",
  education: "shadow-[0_0_8px_2px_rgba(34,197,94,0.4)]",
  project: "shadow-[0_0_8px_2px_rgba(168,85,247,0.4)]",
};

const typeIcon: Record<string, React.ReactNode> = {
  work: <Briefcase className="w-3.5 h-3.5" />,
  education: <GraduationCap className="w-3.5 h-3.5" />,
  project: <Building2 className="w-3.5 h-3.5" />,
};

export function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 lg:px-16">
        {/* Header */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b70] mb-4">
            Experience
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14 md:mb-20">
            Journey &amp; Education
          </h2>
        </Reveal>

        {/* ─── Timeline ────────────────────────────────────────── */}
        <div className="relative ml-4 md:ml-6">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-10">
            {experienceData.map((item, i) => (
              <Reveal key={i} delay={120 + i * 100}>
                <div className="relative pl-8 md:pl-10 group">
                  {/* Dot */}
                  <span
                    className={`absolute left-0 top-[7px] -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#09090b]
                                ${dotColors[item.type]} ${dotGlow[item.type]}`}
                  />

                  {/* Period + Current badge */}
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-xs text-[#6b6b70]">
                      {item.period}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] border border-[#3b82f6]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold tracking-tight flex items-center gap-2">
                    <span className="text-[#6b6b70]">
                      {typeIcon[item.type]}
                    </span>
                    {item.title}
                  </h3>

                  {/* Org */}
                  <p className="text-sm text-[#3b82f6] mt-0.5">{item.org}</p>

                  {/* Location */}
                  {item.location && (
                    <p className="text-xs text-[#6b6b70] mt-0.5">
                      {item.location}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-[#a3a3a8] leading-relaxed mt-3">
                    {item.description}
                  </p>

                  {/* Expandable responsibilities (first entry — internship) */}
                  {item.responsibilities && item.responsibilities.length > 0 && (
                    <div className="mt-3">
                      <button
                        onClick={() =>
                          setExpanded(expanded === i ? null : i)
                        }
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest
                                   text-[#6b6b70] hover:text-white transition-colors duration-200"
                      >
                        <svg
                          className={`w-3 h-3 transition-transform duration-300 ${
                            expanded === i ? "rotate-90" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        {expanded === i
                          ? "Hide responsibilities"
                          : "View responsibilities"}
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          expanded === i
                            ? "max-h-[600px] opacity-100 mt-3"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-2 pl-4 border-l border-white/5">
                          {item.responsibilities.map((resp, j) => (
                            <li
                              key={j}
                              className="text-sm text-[#a3a3a8] leading-relaxed relative pl-4
                                         before:content-[''] before:absolute before:left-0 before:top-[9px]
                                         before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#3b82f6]/40"
                            >
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ─── Education Details ───────────────────────────────── */}
        <Reveal delay={100}>
          <div className="mt-20 md:mt-24">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-[#22c55e]" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#6b6b70]">
                Education
              </h3>
            </div>

            <div className="bg-[#111113] border border-white/10 rounded-xl p-6 md:p-8">
              <h4 className="text-lg font-semibold tracking-tight">
                {educationData.degree}
              </h4>
              <p className="text-sm text-[#3b82f6] mt-1">
                {educationData.institution}
              </p>
              <p className="text-xs text-[#6b6b70] mt-0.5">
                {educationData.affiliation}
              </p>
              <p className="text-xs text-[#a3a3a8] mt-1">
                {educationData.graduation}
              </p>

              {/* Coursework tags */}
              <div className="mt-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#6b6b70] mb-3">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-[#a3a3a8] border border-white/10"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─── Certifications ─────────────────────────────────── */}
        <Reveal delay={200}>
          <div className="mt-12 md:mt-16">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-[#a855f7]" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#6b6b70]">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certificationsData.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 text-sm text-[#a3a3a8] py-2.5 px-4
                             bg-[#111113] border border-white/10 rounded-lg
                             hover:border-[#a855f7]/30 transition-colors duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-[#a855f7]/60 shrink-0" />
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
