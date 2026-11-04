"use client";

import { Reveal } from "@/components/ui/Reveal";

interface SkillGroup {
  category: string;
  skills: string[];
}

const verifiedSkills: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3 / Tailwind"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js (Basics)"],
  },
  {
    category: "Backend & Data",
    skills: ["Firebase Firestore", "REST APIs", "JSON Data Schemas"],
  },
  {
    category: "CAD & Hardware",
    skills: ["AutoCAD", "Autodesk Fusion 360", "Autodesk ReCap", "Arduino / C++"],
  },
  {
    category: "Product & Operations",
    skills: ["Product Requirements (PRDs)", "Workflow Design", "Data Analysis", "Spreadsheet Modeling"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-5 sm:px-8 space-y-12 border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="font-mono text-xs uppercase text-[#a3ff5f] font-semibold tracking-wider">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
            Skills &amp; Technologies
          </h2>
        </div>
        <p className="font-mono text-xs text-[#9296a1]">
          Tools and technologies applied across software projects and engineering coursework
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {verifiedSkills.map((group, idx) => (
          <Reveal key={group.category} delay={80 + idx * 50}>
            <div className="rounded-xl bg-[#111318] border border-white/10 p-6 space-y-4 hover:border-white/20 transition h-full">
              <h3 className="text-base font-bold text-white font-sans border-b border-white/5 pb-2">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-[#181a20] border border-white/10 text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}

export default Skills;
