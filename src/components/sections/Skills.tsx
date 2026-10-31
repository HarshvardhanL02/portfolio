"use client";

import { useState } from "react";
import { skillsData, SkillCategory } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { sound } from "@/lib/three/audioEngine";
import { Code, Cloud, Database, Wrench, Compass, Terminal } from "lucide-react";

interface SkillsProps {
  activeSkillIndex?: number;
  onSelectSkillIndex?: (index: number) => void;
}

export function Skills({ activeSkillIndex = 0, onSelectSkillIndex }: SkillsProps) {
  const [internalIdx, setInternalIdx] = useState(activeSkillIndex);
  const currentIdx = onSelectSkillIndex ? activeSkillIndex : internalIdx;

  const handleSelect = (idx: number) => {
    sound.playHover();
    setInternalIdx(idx);
    if (onSelectSkillIndex) {
      onSelectSkillIndex(idx);
    }
  };

  const categoryIcons = [
    <Code key="0" className="w-4 h-4 text-[#3b82f6]" />,
    <Database key="1" className="w-4 h-4 text-[#06b6d4]" />,
    <Wrench key="2" className="w-4 h-4 text-[#f59e0b]" />,
    <Compass key="3" className="w-4 h-4 text-[#10b981]" />,
  ];

  return (
    <section id="skills" className="relative py-28 md:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#3b82f6] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping" />
                SECTOR 04 // 3D TECHNOLOGY CONSTELLATION
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Technical Capabilities
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-sm text-[#a3a3a8] max-w-md font-mono">
              Hover over or select any cluster to align the 3D orbital constellation graph in the
              background. Zero arbitrary percentages.
            </p>
          </Reveal>
        </div>

        {/* 4-Column Interactive Constellation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillsData.map((cat: SkillCategory, idx: number) => {
            const isSelected = currentIdx === idx;
            return (
              <Reveal key={cat.label} delay={120 + idx * 70}>
                <div
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => handleSelect(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer bg-[#111113]/80 backdrop-blur-md relative flex flex-col justify-between h-full group ${
                    isSelected
                      ? "border-[#3b82f6] shadow-xl shadow-[#3b82f6]/20 ring-1 ring-[#3b82f6]/40"
                      : "border-white/10 hover:border-white/20 hover:bg-[#17171a]/70"
                  }`}
                >
                  {/* Top Bar Glow */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] transition-opacity duration-300 ${
                      isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">
                        {categoryIcons[idx] || <Terminal className="w-4 h-4 text-white" />}
                      </div>
                      <span className="font-mono text-[10px] text-[#6b6b70] uppercase tracking-wider">
                        CLUSTER 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white tracking-tight mb-4">
                      {cat.label}
                    </h3>

                    {/* Skill Node Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 font-mono text-xs text-[#cbd5e1] hover:border-[#38bdf8]/40 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between font-mono text-[10px] text-[#6b6b70]">
                    <span>STATUS: VERIFIED</span>
                    <span className="text-[#38bdf8]">
                      {isSelected ? "● ACTIVE ORBIT" : "ORBIT IDLE"}
                    </span>
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

export default Skills;
