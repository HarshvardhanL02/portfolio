"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-5 sm:px-8 space-y-12 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs uppercase text-[#a3ff5f] font-semibold tracking-wider">
            Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            About Me
          </h2>
        </div>
        <p className="font-mono text-xs text-[#9296a1]">
          Mechanical engineering student combining software product development with physical systems
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Narrative */}
        <div className="lg:col-span-7 space-y-5 text-neutral-300 text-base leading-relaxed">
          <Reveal delay={80}>
            <p>
              I am a Mechanical Engineering student at <strong className="text-white">MIT Academy of Engineering, Pune</strong> (2025–2029). While my degree curriculum covers thermodynamics, workshop fabrication, CAD modeling, and mechanics, my personal projects focus on software tools and fullstack web platforms.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <p>
              My journey into software started when I tried solving a practical problem: engineering aspirants in Maharashtra having to navigate hundreds of pages of unsearchable government cutoff PDFs during admissions. That led to <strong className="text-[#a3ff5f]">TwinSparkTech</strong>, a web application that makes cutoff analytics, category quotas, and seat matrix data searchable and easy to explore.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p>
              Currently, I am also a Product &amp; Management Intern at <strong className="text-white">Aditya Counselling</strong>, developing internal web tools and contributing to the CounselDesk workflow system. I enjoy working at the intersection of clear software interfaces, real user workflows, and physical engineering design.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-neutral-400">
              <div><span className="text-white">Languages:</span> English, Hindi, Marathi</div>
              <div><span className="text-white">Location:</span> Pune, Maharashtra, India</div>
            </div>
          </Reveal>
        </div>

        {/* Right Academic Summary Card */}
        <div className="lg:col-span-5">
          <Reveal delay={140}>
            <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#a3ff5f]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    MIT Academy of Engineering
                  </h3>
                  <p className="font-mono text-xs text-neutral-400">
                    Alandi, Pune, Maharashtra
                  </p>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-neutral-300 border-t border-white/5 pt-4">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Degree:</span>
                  <span className="text-white font-medium">B.E. Mechanical Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Duration:</span>
                  <span className="text-[#a3ff5f]">2025 – 2029</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">University:</span>
                  <span className="text-neutral-300">Savitribai Phule Pune Univ.</span>
                </div>
              </div>

              <p className="text-xs text-[#9296a1] leading-relaxed pt-2 border-t border-white/5">
                Coursework in engineering drawing, CAD parametric modeling, manufacturing processes, and workshop practice.
              </p>
            </div>
          </Reveal>
        </div>

      </div>

    </section>
  );
}

export default About;
