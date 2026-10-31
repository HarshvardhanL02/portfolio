"use client";

import { educationData, certificationsData } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap, Award, Compass, Wrench, FileCode, CheckCircle } from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

export function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#38bdf8] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
                SECTOR 06 // 3D CAD &amp; ENGINEERING WORKSPACE
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Mechanical Engineering &amp; CAD
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-sm text-[#a3a3a8] max-w-md font-mono">
              Academic degree and industry certifications grounding digital engineering in physical
              manufacturing principles.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Grid: Degree Blueprint & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Degree Card (2 cols) */}
          <div className="lg:col-span-2">
            <Reveal delay={120}>
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111113]/85 backdrop-blur-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#38bdf8]">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#6b6b70] uppercase tracking-wider">
                        DEGREE ACCREDITATION
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {educationData.degree}
                      </h3>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-[#10b981] px-3 py-1 rounded-full bg-[#10b981]/10 border border-[#10b981]/30">
                    2025 — 2029
                  </span>
                </div>

                <div className="space-y-1 mb-6">
                  <p className="text-base font-semibold text-[#60a5fa]">
                    {educationData.institution}
                  </p>
                  <p className="font-mono text-xs text-[#a3a3a8]">
                    {educationData.affiliation}
                  </p>
                  <p className="font-mono text-xs text-[#6b6b70]">
                    {educationData.graduation}
                  </p>
                </div>

                {/* Coursework Blueprint Grid */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b70] mb-4">
                    RELEVANT ACADEMIC COURSEWORK &amp; WORKSHOP PRACTICE
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {educationData.coursework.map((c) => (
                      <div
                        key={c}
                        onMouseEnter={() => sound.playHover()}
                        className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex items-center gap-2.5"
                      >
                        <Wrench className="w-4 h-4 text-[#38bdf8] shrink-0" />
                        <span className="text-xs font-mono text-white">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Fundamentals Callout */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/10 font-mono text-xs text-[#94a3b8] flex items-center justify-between">
                  <span>CAD &amp; DRAFTING TOOLCHAIN:</span>
                  <span className="text-[#38bdf8]">AutoCAD · Autodesk Fusion 360 · Autodesk ReCap</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Certifications Matrix (1 col) */}
          <div>
            <Reveal delay={200}>
              <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-[#111113]/85 backdrop-blur-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-6">
                    <Award className="w-5 h-5 text-[#f59e0b]" />
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#a3a3a8]">
                      Industry Certifications
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {certificationsData.map((cert) => (
                      <div
                        key={cert}
                        onMouseEnter={() => sound.playHover()}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition-all flex items-start gap-2.5 text-xs font-mono text-[#cbd5e1]"
                      >
                        <CheckCircle className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-[10px] text-[#6b6b70] flex items-center justify-between">
                  <span>ACCREDITATION STATUS</span>
                  <span className="text-[#10b981]">VERIFIED</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

