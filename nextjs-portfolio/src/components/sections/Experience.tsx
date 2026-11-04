"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-5 sm:px-8 space-y-12 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs uppercase text-[#a3ff5f] font-semibold tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Work &amp; Internship
          </h2>
        </div>
        <p className="font-mono text-xs text-[#9296a1]">
          Practical product development and operational workflow engineering
        </p>
      </div>

      {/* Main Experience Card */}
      <Reveal delay={80}>
        <div className="rounded-2xl bg-[#111318] border border-white/10 p-6 sm:p-8 space-y-6">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs px-2.5 py-1 rounded bg-[#a3ff5f]/10 border border-[#a3ff5f]/30 text-[#a3ff5f] mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Internship</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Product &amp; Management Intern
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#9296a1] mt-1 font-mono">
                <span className="text-white font-medium">Aditya Counselling Private Limited</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Pune, Maharashtra</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded bg-[#181a20] border border-white/10 text-neutral-300">
              <Calendar className="w-3.5 h-3.5 text-[#a3ff5f]" />
              <span>April 2026 – Present</span>
            </div>
          </div>

          {/* Role Summary */}
          <p className="text-base text-[#f4f4f5] leading-relaxed">
            Working on internal tools, web products, and the CounselDesk student management platform while supporting product management operations.
          </p>

          {/* Clean bulleted list */}
          <ul className="space-y-3 text-sm text-[#9296a1] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="text-white mt-1">•</span>
              <span>Developing and maintaining internal web platforms and workflow tools to organize student admissions records and counselor assignments.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-white mt-1">•</span>
              <span>Contributing to the frontend implementation of the CounselDesk platform, focusing on student intake forms, status tags, and verification checklists.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-white mt-1">•</span>
              <span>Built dedicated mentor and student list-generation tools that eliminated manual spreadsheet tracking during high-volume counseling periods.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-white mt-1">•</span>
              <span>Assisting with product requirement scoping (PRDs), gathering feedback from counseling staff, and performing user acceptance testing.</span>
            </li>
          </ul>

        </div>
      </Reveal>

    </section>
  );
}

export default Experience;
