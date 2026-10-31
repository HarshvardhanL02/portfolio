"use client";

import { aboutData } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16">
          {/* Left — Section header */}
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b70] mb-4">
                About
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Who I Am
              </h2>
            </Reveal>
          </div>

          {/* Right — Paragraphs */}
          <div className="space-y-5">
            {aboutData.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 80}>
                <p className="text-[#a3a3a8] leading-relaxed">
                  {i === 0 && (
                    <>
                      I&apos;m a Mechanical Engineering student at MIT Academy
                      of Engineering, Pune, with practical experience in
                      software development, product management, internal tool
                      development, automation, and engineering projects.
                    </>
                  )}
                  {i === 1 && (
                    <>
                      What started as a personal project to help MHT-CET
                      students find the right college grew into{" "}
                      <strong className="text-white font-semibold">
                        TwinSparkTech
                      </strong>{" "}
                      — a full ecosystem of prediction engines, data tools, and
                      a counselling management platform. Along the way, I picked
                      up an internship at{" "}
                      <strong className="text-white font-semibold">
                        Aditya Counselling
                      </strong>
                      , where I work on web products, internal tools, and the{" "}
                      <strong className="text-white font-semibold">
                        CounselDesk
                      </strong>{" "}
                      student management system.
                    </>
                  )}
                  {i === 2 && (
                    <>
                      Outside of software, I work on mechanical engineering
                      projects — from CAD modelling and workshop practice to
                      assembling an electric tricycle prototype and building an
                      Arduino-based air quality indicator. I care about shipping
                      things that work, learning from working engineers, and
                      going deeper on both engineering and software fundamentals.
                    </>
                  )}
                </p>
              </Reveal>
            ))}

            {/* Languages */}
            <Reveal delay={400}>
              <div className="pt-6 border-t border-white/10">
                <p className="font-mono text-xs uppercase tracking-widest text-[#6b6b70] mb-2">
                  Languages
                </p>
                <p className="text-sm text-[#a3a3a8]">
                  {aboutData.languages.join(" · ")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
