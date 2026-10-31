"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Cpu, Cog, Layers, Sparkles, Binary, Wrench } from "lucide-react";
import { sound } from "@/lib/three/audioEngine";

interface AboutProps {
  activeIndex?: number;
  onSelectIndex?: (index: number) => void;
}

const reactorPillars = [
  {
    id: 0,
    title: "Mechanical Engineering",
    category: "FOUNDATION",
    icon: <Cog className="w-5 h-5 text-[#3b82f6]" />,
    summary:
      "B.E. Mechanical Engineering student at MIT Academy of Engineering (MITAOE), Pune. Strong grounding in engineering drawing, manufacturing processes, workshop practice, and lathe machine operations.",
    details: [
      "Workshop Practice: Lathe turning, facing, step turning, bench fitting",
      "CAD & Design: AutoCAD, Autodesk Fusion 360, Autodesk ReCap",
      "Coursework: Engineering Mechanics, Physics, Electrical & Electronics",
    ],
  },
  {
    id: 1,
    title: "Software & Web Systems",
    category: "ENGINEERING",
    icon: <Binary className="w-5 h-5 text-[#06b6d4]" />,
    summary:
      "Full-stack web developer building high-utility platforms and internal tools. Passionate about structured datasets, clean architecture, and snappy user interfaces.",
    details: [
      "TwinSparkTech: Complete MHT-CET digital ecosystem and prediction engines",
      "Full-Stack: Next.js, HTML, CSS, JavaScript, Python (basics)",
      "Data Infrastructure: Firebase, Cloudflare Workers, Cloudflare D1/R2, Drizzle ORM",
    ],
  },
  {
    id: 2,
    title: "Product & Digital Operations",
    category: "PRODUCT",
    icon: <Layers className="w-5 h-5 text-[#38bdf8]" />,
    summary:
      "Product & Management Intern at Aditya Counselling Private Limited. Bridging user needs, feature planning, workflow design, testing, and operational software deployment.",
    details: [
      "CounselDesk Platform: Student data management & counselling coordination",
      "Student & Mentor Tool: Custom list-generation and automated assignment workflows",
      "Main Website: Frontend feature implementation, UI design & documentation",
    ],
  },
  {
    id: 3,
    title: "Hardware, IoT & Automation",
    category: "SYSTEMS",
    icon: <Cpu className="w-5 h-5 text-[#818cf8]" />,
    summary:
      "Hands-on prototype development spanning physical mechanics and smart computing. Building things that solve messy real-world problems.",
    details: [
      "Government PDF Engine: Python/JS pipeline parsing complex CAP PDFs to clean JSON",
      "Electric Tricycle: Academic team assembly of battery-powered vehicle prototype",
      "Mini Air Quality Indicator: Arduino Uno + MQ gas sensors + OLED display",
    ],
  },
];

export function About({ activeIndex = 0, onSelectIndex }: AboutProps) {
  const [internalActive, setInternalActive] = useState(activeIndex);
  const currentIdx = onSelectIndex ? activeIndex : internalActive;

  const handleSelect = (idx: number) => {
    sound.playClick();
    setInternalActive(idx);
    if (onSelectIndex) {
      onSelectIndex(idx);
    }
  };

  const activePillar = reactorPillars[currentIdx] || reactorPillars[0];

  return (
    <section id="about" className="relative py-28 md:py-36 px-5 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#3b82f6] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-ping" />
                SECTOR 02 // THE ENGINEERING CORE
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Engineering at the Intersection
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-sm text-[#a3a3a8] max-w-md font-mono">
              Combining mechanical fundamentals with modern software, automated pipelines, and
              product management.
            </p>
          </Reveal>
        </div>

        {/* 4 Interactive Reactor Selector Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {reactorPillars.map((p, idx) => {
            const isSelected = currentIdx === idx;
            return (
              <button
                key={p.id}
                onClick={() => handleSelect(idx)}
                onMouseEnter={() => sound.playHover()}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                  isSelected
                    ? "border-[#3b82f6] bg-[#111113]/90 shadow-xl shadow-[#3b82f6]/20"
                    : "border-white/10 bg-[#111113]/50 hover:border-white/20 hover:bg-[#17171a]/70"
                }`}
              >
                {/* Active Glowing Indicator Bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] transition-opacity duration-300 ${
                    isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  }`}
                />

                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10">
                    {p.icon}
                  </div>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#6b6b70]">
                    NODE 0{idx + 1}
                  </span>
                </div>

                <p className="font-mono text-[10px] uppercase text-[#38bdf8] tracking-wider mb-1">
                  {p.category}
                </p>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {p.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Telemetry Console */}
        <Reveal delay={200}>
          <div className="bg-[#111113]/80 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3b82f6]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08] mb-6">
              <div>
                <span className="font-mono text-xs text-[#06b6d4] uppercase tracking-widest">
                  TELEMETRY READOUT // {activePillar.category}
                </span>
                <h4 className="text-2xl font-bold text-white mt-1">
                  {activePillar.title}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#6b6b70] uppercase">
                  REACTOR STATUS:
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  STABLE CONFINEMENT
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#e2e8f0] leading-relaxed mb-6">
              {activePillar.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {activePillar.details.map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-[#a3a3a8] flex items-start gap-2.5"
                >
                  <Wrench className="w-4 h-4 text-[#3b82f6] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Languages Bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-xs text-[#6b6b70]">
                <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="uppercase tracking-wider">LANGUAGES:</span>
                <span className="text-white">English (Professional) · Hindi (Native) · Marathi (Native)</span>
              </div>

              <div className="font-mono text-xs text-[#6b6b70]">
                LOCATION: <span className="text-white">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
