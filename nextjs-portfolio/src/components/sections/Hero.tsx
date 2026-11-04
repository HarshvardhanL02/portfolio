"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ArrowDown, Github, FileDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16 px-5 sm:px-8 bg-[#09090b]"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Direct developer identity */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a20] border border-white/10 text-xs font-mono text-[#9296a1]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3ff5f]" />
              <span>MIT Academy of Engineering, Pune (2025–2029)</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Harshvardhan <br />
                <span className="text-[#9296a1]">Lokhande</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-neutral-200">
                Developer, Product Builder &amp; Mechanical Engineering Student
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="text-[#9296a1] text-base sm:text-lg leading-relaxed max-w-xl">
              I build web applications, automation pipelines, and mechanical prototypes. Creator of <span className="text-white font-medium">TwinSparkTech</span> (an engineering admissions platform) and currently a <span className="text-white font-medium">Product &amp; Management Intern</span> at Aditya Counselling.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "#projects")}
                className="px-5 py-3 rounded-lg bg-[#a3ff5f] hover:bg-[#b8ff82] text-black font-semibold flex items-center gap-2 transition"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/HarshvardhanL02"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-lg bg-[#181a20] hover:bg-[#22252e] border border-white/10 text-white font-medium transition flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>

              <a
                href="/resume.pdf"
                download="Harshvardhan_Lokhande_Resume.pdf"
                className="px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 text-[#9296a1] hover:text-white transition flex items-center gap-1.5"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Genuine TwinSparkTech Product Preview Card */}
        <div className="lg:col-span-5">
          <Reveal delay={180}>
            <div className="rounded-2xl bg-[#111318] border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Card Header */}
              <div className="px-4 py-3 bg-[#181a20] border-b border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-white">
                  TwinSparkTech
                </span>
                <a
                  href="https://twinsparktech.online"
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-[#a3ff5f] hover:underline flex items-center gap-1"
                >
                  <span>twinsparktech.online</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] text-[#a3ff5f] uppercase tracking-wider font-semibold">
                    Live Platform
                  </span>
                  <h3 className="text-base font-bold text-white">
                    MHT-CET College Predictor &amp; Cutoff Analytics
                  </h3>
                  <p className="text-xs text-[#9296a1] leading-relaxed">
                    A digital tool helping students filter historical CAP cutoff percentiles, category quotas, and seat matrices across Maharashtra engineering colleges.
                  </p>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-[#09090b] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium text-xs">COEP Tech, Pune</div>
                      <div className="text-neutral-500 text-[11px]">Computer Engineering</div>
                    </div>
                    <span className="text-amber-400 text-[11px]">99.85 cutoff</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#09090b] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium text-xs">PICT Pune</div>
                      <div className="text-neutral-500 text-[11px]">Information Technology</div>
                    </div>
                    <span className="text-blue-400 text-[11px]">98.60 cutoff</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#09090b] border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-white font-medium text-xs">MIT AOE, Pune</div>
                      <div className="text-neutral-500 text-[11px]">Computer Engineering</div>
                    </div>
                    <span className="text-[#a3ff5f] text-[11px]">95.80 cutoff</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 font-mono text-[11px] text-[#9296a1] border-t border-white/5">
                  <span className="text-neutral-400">Tech:</span>
                  <span>Next.js</span>
                  <span>•</span>
                  <span>React</span>
                  <span>•</span>
                  <span>Tailwind</span>
                  <span>•</span>
                  <span>Firestore</span>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

export default Hero;
