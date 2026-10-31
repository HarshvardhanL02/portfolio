"use client";

import { useState } from "react";
import { experienceData, Experience as ExperienceType } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, Building2, GraduationCap, ChevronDown, CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

interface ExperienceProps {
  activeIndex?: number;
  onSelectIndex?: (index: number) => void;
}

export function Experience({ activeIndex = 0, onSelectIndex }: ExperienceProps) {
  const [expanded, setExpanded] = useState<number | null>(0); // First expanded by default
  const [internalActive, setInternalActive] = useState<number>(activeIndex);

  const curIdx = onSelectIndex ? activeIndex : internalActive;

  const handleSelect = (idx: number) => {
    sound.playClick();
    setInternalActive(idx);
    setExpanded(expanded === idx ? null : idx);
    if (onSelectIndex) {
      onSelectIndex(idx);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-4 h-4 text-[#3b82f6]" />;
      case "project":
        return <Building2 className="w-4 h-4 text-[#06b6d4]" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-[#10b981]" />;
      default:
        return <Briefcase className="w-4 h-4 text-[#3b82f6]" />;
    }
  };

  return (
    <section id="experience" className="relative py-28 md:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#06b6d4] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                SECTOR 05 // 3D INDUSTRIAL TIMELINE
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Professional Trajectory
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-sm text-[#a3a3a8] max-w-md font-mono">
              Industrial timeline spanning professional internships, independent product building,
              and mechanical engineering degree.
            </p>
          </Reveal>
        </div>

        {/* 3D Timeline Rail with Floating Docking Stations */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 space-y-8">
          {experienceData.map((item: ExperienceType, idx: number) => {
            const isSelected = curIdx === idx;
            const isExpanded = expanded === idx;

            return (
              <Reveal key={item.title} delay={120 + idx * 80}>
                <div className="relative group">
                  {/* Timeline Gantry Node Pin */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#050507] transition-all duration-300 ${
                      isSelected
                        ? "bg-[#38bdf8] scale-125 shadow-[0_0_14px_#38bdf8]"
                        : "bg-[#27272a] group-hover:bg-[#3b82f6]"
                    }`}
                  />

                  {/* Card Container */}
                  <div
                    onClick={() => handleSelect(idx)}
                    onMouseEnter={() => sound.playHover()}
                    className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer bg-[#111113]/85 backdrop-blur-md relative overflow-hidden ${
                      isSelected
                        ? "border-[#3b82f6] shadow-xl shadow-[#3b82f6]/15 ring-1 ring-[#3b82f6]/40"
                        : "border-white/10 hover:border-white/20 hover:bg-[#17171a]/70"
                    }`}
                  >
                    {/* Top Row: Period & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                          {getIcon(item.type)}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
                          {item.period}
                        </span>
                      </div>

                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 font-mono text-[10px] uppercase tracking-widest">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                          ACTIVE ROLE
                        </span>
                      )}
                    </div>

                    {/* Role Title & Organization */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#60a5fa] mb-1">
                      {item.org}
                    </p>
                    {item.location && (
                      <p className="font-mono text-xs text-[#6b6b70] mb-4">
                        {item.location}
                      </p>
                    )}

                    <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Expandable Responsibilities Accordion */}
                    {item.responsibilities && item.responsibilities.length > 0 && (
                      <div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelect(idx);
                          }}
                          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#38bdf8] hover:text-white transition-colors"
                        >
                          <span>{isExpanded ? "Collapse Details" : "Inspect Responsibilities"}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isExpanded && (
                          <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-2.5">
                            {item.responsibilities.map((resp: string, rIdx: number) => (
                              <div
                                key={rIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#a3a3a8] font-mono leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
