"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
} from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs uppercase text-[#a3ff5f] font-semibold tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Projects &amp; Prototypes
          </h2>
        </div>
        <p className="font-mono text-xs text-[#9296a1]">
          Software applications, internal systems, hardware prototypes, and data pipelines
        </p>
      </div>

      {/* PROJECT 01: TWINSPARKTECH */}
      <Reveal delay={80}>
        <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#a3ff5f]/10 border border-[#a3ff5f]/30 text-[#a3ff5f] font-semibold">
              Web Platform • Flagship
            </span>
            
            <div className="flex items-center gap-4 font-mono text-xs">
              <a
                href="https://github.com/HarshvardhanL02"
                target="_blank"
                rel="noreferrer"
                className="text-[#9296a1] hover:text-white flex items-center gap-1.5 transition"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>
              <a
                href="https://twinsparktech.online"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-[#a3ff5f] font-medium flex items-center gap-1 transition"
              >
                <span>twinsparktech.online</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                TwinSparkTech
              </h3>
              
              <p className="text-sm text-[#9296a1] leading-relaxed">
                A student-facing admissions portal built to help engineering aspirants in Maharashtra navigate complex state CAP rounds. The platform replaces unsearchable 400+ page government cutoff PDFs with dynamic search, category quota filtering (GOPENS, TFWS, EWS), seat matrix explorers, and percentile-to-rank calculators.
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                I engineered the fullstack web application with Next.js and React, modeled Firestore document collections for multi-year cutoff queries, and built the responsive frontend with Tailwind CSS.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-white">Next.js</span>
                <span className="px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-white">React</span>
                <span className="px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-white">Tailwind CSS</span>
                <span className="px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-[#a3ff5f]">Firebase Firestore</span>
              </div>
            </div>

            {/* Platform Preview Card */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#09090b] border border-white/10 p-5 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-white font-medium">Core Platform Modules</span>
                  <span className="text-[#a3ff5f]">twinsparktech.online</span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded bg-[#111318] border border-white/5 space-y-1">
                    <div className="text-white font-medium">College Cutoff Predictor</div>
                    <div className="text-[#9296a1] text-[11px] font-sans">
                      Predicts admission chances based on MHT-CET percentile and reservation category.
                    </div>
                  </div>

                  <div className="p-3 rounded bg-[#111318] border border-white/5 space-y-1">
                    <div className="text-white font-medium">Seat Matrix Explorer</div>
                    <div className="text-[#9296a1] text-[11px] font-sans">
                      Interactive breakdown of seat distribution by college, branch, and quota.
                    </div>
                  </div>

                  <div className="p-3 rounded bg-[#111318] border border-white/5 space-y-1">
                    <div className="text-white font-medium">Rank &amp; Percentile Estimators</div>
                    <div className="text-[#9296a1] text-[11px] font-sans">
                      Historical score-to-percentile modeling for exam candidates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* PROJECT 02: COUNSELDESK */}
      <Reveal delay={100}>
        <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold">
              Internal Enterprise Platform
            </span>
            <span className="font-mono text-xs text-neutral-400">Aditya Counselling Pvt Ltd</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                CounselDesk
              </h3>
              
              <p className="text-sm text-[#9296a1] leading-relaxed">
                An internal student management and admissions workflow platform created for counselors at Aditya Counselling. Before CounselDesk, student inquiry tracking and document collection relied on manual spreadsheets and direct messaging.
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                I developed dashboard interfaces in React, mapped the multi-stage student verification lifecycle, and built list-generation tools that streamline how counseling mentors receive and manage candidate cohorts.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 font-mono text-xs">
                <span className="px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-white">React</span>
                <span className="px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-white">Node.js</span>
                <span className="px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-blue-400">Workflow Automation</span>
              </div>
            </div>

            {/* Workflow Diagram */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#09090b] border border-white/10 p-5 space-y-3 font-mono text-xs">
                <div className="text-white font-medium border-b border-white/10 pb-2">
                  CounselDesk Operations Flow
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded bg-[#181a20] border border-white/5 flex items-center justify-between">
                    <span className="text-white">1. Candidate Intake</span>
                    <span className="text-[#9296a1] text-[11px]">Academic marks &amp; quota validation</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181a20] border border-white/5 flex items-center justify-between">
                    <span className="text-white">2. Document Verification</span>
                    <span className="text-[#9296a1] text-[11px]">Caste, domicile, and certificate checks</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#181a20] border border-white/5 flex items-center justify-between">
                    <span className="text-white">3. Mentor Allocation</span>
                    <span className="text-[#9296a1] text-[11px]">Cohort distribution &amp; session logging</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* PROJECTS 03 - 06: GRID LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* 03. SIH 26177 — Edge-AI Disaster SAR */}
        <Reveal delay={120}>
          <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8 space-y-5 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-semibold">
                  Hackathon Prototype
                </span>
                <span className="text-neutral-500">Smart India Hackathon</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Edge-AI Disaster Search &amp; Rescue (SIH 26177)
              </h3>

              <p className="text-sm text-[#9296a1] leading-relaxed">
                An autonomous drone computer vision system built to locate trapped survivors in structural collapse zones. Designed specifically for environments where cellular networks are down, running all inferencing locally on onboard edge compute hardware.
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                I worked on the Python-based edge inferencing pipeline using YOLO models for human detection and pose estimation, while also designing the CAD mounting bracket to stabilize optical and thermal camera payloads on the drone chassis.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Python</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">YOLO</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">OpenCV</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Payload CAD</span>
            </div>
          </div>
        </Reveal>

        {/* 04. Custom Electric Tricycle */}
        <Reveal delay={140}>
          <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8 space-y-5 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold">
                  Mechanical Engineering
                </span>
                <span className="text-neutral-500">Hardware Prototype</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Custom Electric Tricycle Prototype
              </h3>

              <p className="text-sm text-[#9296a1] leading-relaxed">
                A physical engineering project focused on developing a lightweight utility electric vehicle for campus and workshop cargo transport. Required balancing low-speed torque delivery, battery housing safety, and structural frame rigidity.
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                I modeled the 3D chassis components and drivetrain assembly in Autodesk Fusion 360, verified load distributions and steering geometry, and performed hands-on frame welding and mechanical assembly in the workshop.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Fusion 360</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Chassis CAD</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Powertrain</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Fabrication</span>
            </div>
          </div>
        </Reveal>

        {/* 05. Mini Air Quality Indicator */}
        <Reveal delay={160}>
          <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8 space-y-5 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold">
                  Embedded Hardware
                </span>
                <span className="text-neutral-500">Arduino / IoT</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Mini Air Quality Indicator
              </h3>

              <p className="text-sm text-[#9296a1] leading-relaxed">
                A compact hardware monitor built to measure ambient particulate matter (PM2.5/PM10) and hazardous gas levels in laboratory environments, providing immediate color-coded visual feedback.
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                I wrote the Arduino C++ firmware to sample analog and I2C sensor inputs, calibrated threshold ranges for different air conditions, and modeled a 3D-printed enclosure to protect circuit components.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Arduino</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">C++</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Sensors</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">3D Printing</span>
            </div>
          </div>
        </Reveal>

        {/* 06. PDF Data Extraction Tool */}
        <Reveal delay={180}>
          <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8 space-y-5 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center font-mono text-xs">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold">
                  Automation
                </span>
                <span className="text-neutral-500">Python Pipeline</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Automated PDF Data Extraction Tool
              </h3>

              <p className="text-sm text-[#9296a1] leading-relaxed">
                An automated parsing utility designed to extract tabular college cutoff figures and seat matrix distributions from unstructured multi-page government PDFs into clean, validated JSON datasets.
              </p>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Built using Python and PyPDF with regular expression pattern matching to normalize inconsistent table layouts and category abbreviations, providing the underlying data that feeds TwinSparkTech.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 font-mono text-xs">
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Python</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">PyPDF</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Regex</span>
              <span className="px-2 py-0.5 rounded bg-[#181a20] border border-white/10 text-white">Data Ingestion</span>
            </div>
          </div>
        </Reveal>

      </div>

    </section>
  );
}

export default Projects;
