"use client";

import { useState } from "react";
import { projectsData, twinsparkModules, siteConfig, Project } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import {
  ExternalLink,
  Github,
  Lock,
  Code2,
  Database,
  Cpu,
  Wifi,
  Brain,
  Layout,
  FileSpreadsheet,
  Layers,
  Sparkles,
} from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

interface ProjectsProps {
  activeProjectId?: string;
  onSelectProjectId?: (id: string) => void;
}

export function Projects({ activeProjectId = "twinsparktech", onSelectProjectId }: ProjectsProps) {
  const [internalActive, setInternalActive] = useState(activeProjectId);
  const curActive = onSelectProjectId ? activeProjectId : internalActive;

  const handleSelect = (id: string) => {
    sound.playClick();
    setInternalActive(id);
    if (onSelectProjectId) {
      onSelectProjectId(id);
    }
  };

  const flagship = projectsData[0]; // TwinSparkTech

  // Visual category icons
  const getIcon = (visual: string) => {
    switch (visual) {
      case "platform":
        return <Layout className="w-5 h-5 text-[#3b82f6]" />;
      case "code":
        return <Code2 className="w-5 h-5 text-[#06b6d4]" />;
      case "crm":
        return <Database className="w-5 h-5 text-[#38bdf8]" />;
      case "hardware":
        return <Cpu className="w-5 h-5 text-[#f59e0b]" />;
      case "iot":
        return <Wifi className="w-5 h-5 text-[#10b981]" />;
      case "ai":
        return <Brain className="w-5 h-5 text-[#f43f5e]" />;
      default:
        return <Layers className="w-5 h-5 text-[#3b82f6]" />;
    }
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#38bdf8] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-ping" />
                SECTOR 03 // 3D PROJECT ENVIRONMENTS
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Engineered Systems &amp; Software
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-sm text-[#a3a3a8] max-w-md font-mono">
              Hover or select any project to activate its corresponding 3D holographic model in the
              facility background.
            </p>
          </Reveal>
        </div>

        {/* ── PROJECT A: FLAGSHIP TWINSPARKTECH COMMAND DECK ───────── */}
        <Reveal delay={200}>
          <div
            onClick={() => handleSelect(flagship.id)}
            onMouseEnter={() => {
              handleSelect(flagship.id);
              sound.playHover();
            }}
            className={`cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden mb-16 relative bg-[#111113]/85 backdrop-blur-md ${
              curActive === flagship.id
                ? "border-[#3b82f6] shadow-2xl shadow-[#3b82f6]/20 ring-1 ring-[#3b82f6]/50"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            {/* Top Chrome Command Bar */}
            <div className="px-6 py-4 bg-white/[0.03] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-[#a3a3a8]">
                  https://twinsparktech.online
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/30 font-mono text-[11px] uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  FLAGSHIP ECOSYSTEM
                </span>
                <span className="font-mono text-[11px] text-[#6b6b70] uppercase">
                  3D ENVIRONMENT: ACTIVE
                </span>
              </div>
            </div>

            {/* Flagship Body Content */}
            <div className="p-6 sm:p-10">
              <div className="max-w-3xl mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  {flagship.title}
                </h3>
                <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed mb-6">
                  {flagship.description}
                </p>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs text-[#a3a3a8] mb-6">
                  <span className="text-[#38bdf8] font-semibold">MY CONTRIBUTION: </span>
                  {flagship.contribution}
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {flagship.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 font-mono text-xs text-[#94a3b8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Real Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://twinsparktech.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#0a0a0b] font-semibold text-xs sm:text-sm hover:bg-[#38bdf8] hover:text-white transition-all shadow-lg shadow-white/10"
                  >
                    <span>Launch TwinSparkTech</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="https://github.com/HarshvardhanL02"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      sound.playClick();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-white font-medium text-xs sm:text-sm hover:border-[#3b82f6] hover:bg-[#17171a] transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                </div>
              </div>

              {/* 8 Connected Modules & Services Grid */}
              <div className="pt-8 border-t border-white/[0.08]">
                <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b70] mb-4">
                  ECOSYSTEM MODULES &amp; ARCHITECTURE
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {twinsparkModules.map((mod) => (
                    <div
                      key={mod.name}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-semibold text-white">{mod.name}</h4>
                          {mod.status === "Live" && mod.url ? (
                            <a
                              href={mod.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-mono text-[10px] text-[#38bdf8] hover:underline flex items-center gap-1"
                            >
                              Live ↗
                            </a>
                          ) : (
                            <span className="font-mono text-[10px] text-[#6b6b70]">
                              {mod.status}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#a3a3a8] leading-relaxed">
                          {mod.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── PROJECTS B TO G: THE 3D PROJECT GRID ──────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.slice(1).map((proj: Project, idx: number) => {
            const isSelected = curActive === proj.id;
            return (
              <Reveal key={proj.id} delay={120 + idx * 60}>
                <div
                  onClick={() => handleSelect(proj.id)}
                  onMouseEnter={() => {
                    handleSelect(proj.id);
                    sound.playHover();
                  }}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer bg-[#111113]/75 backdrop-blur-md flex flex-col justify-between h-full relative overflow-hidden group ${
                    isSelected
                      ? "border-[#06b6d4] shadow-xl shadow-[#06b6d4]/15 ring-1 ring-[#06b6d4]/40"
                      : "border-white/10 hover:border-white/20 hover:bg-[#17171a]/80"
                  }`}
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                        {getIcon(proj.visual)}
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#6b6b70] border border-white/10 px-2.5 py-1 rounded">
                        {proj.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#cbd5e1] leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] font-mono text-xs text-[#94a3b8] mb-5">
                      <span className="text-[#38bdf8] font-semibold">CONTRIBUTION: </span>
                      {proj.contribution}
                    </div>
                  </div>

                  {/* Tech stack & links */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 font-mono text-[11px] text-[#a3a3a8]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#6b6b70] uppercase">
                        {isSelected ? "● 3D MODEL PROJECTED" : "SELECT TO PROJECT 3D"}
                      </span>

                      <div className="flex gap-2">
                        {proj.links.length > 0 ? (
                          proj.links.map((link) =>
                            link.disabled ? (
                              <span
                                key={link.label}
                                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6b6b70] cursor-not-allowed"
                              >
                                <Lock className="w-3 h-3" />
                                {link.label}
                              </span>
                            ) : (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  sound.playClick();
                                }}
                                className="inline-flex items-center gap-1 text-xs font-mono text-[#38bdf8] hover:text-white transition-colors"
                              >
                                <span>{link.label}</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )
                          )
                        ) : (
                          <span className="text-xs font-mono text-[#6b6b70]">
                            Academic Prototype
                          </span>
                        )}
                      </div>
                    </div>
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

export default Projects;
