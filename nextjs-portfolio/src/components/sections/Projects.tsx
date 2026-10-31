"use client";

import { projectsData, twinsparkModules, siteConfig } from "@/lib/data";
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
} from "lucide-react";

/* ── helpers ─────────────────────────────────────────────── */

const visualIcon = (type: string) => {
  switch (type) {
    case "platform":
      return <Layout className="w-8 h-8 text-[#3b82f6]/60" />;
    case "code":
      return <Code2 className="w-8 h-8 text-emerald-400/60" />;
    case "crm":
      return <Database className="w-8 h-8 text-violet-400/60" />;
    case "hardware":
      return <Cpu className="w-8 h-8 text-orange-400/60" />;
    case "iot":
      return <Wifi className="w-8 h-8 text-cyan-400/60" />;
    case "ai":
      return <Brain className="w-8 h-8 text-rose-400/60" />;
    default:
      return <Layout className="w-8 h-8 text-[#3b82f6]/60" />;
  }
};

const visualGradient = (type: string) => {
  switch (type) {
    case "platform":
      return "from-[#3b82f6]/10 via-transparent to-transparent";
    case "code":
      return "from-emerald-500/10 via-transparent to-transparent";
    case "crm":
      return "from-violet-500/10 via-transparent to-transparent";
    case "hardware":
      return "from-orange-500/10 via-transparent to-transparent";
    case "iot":
      return "from-cyan-500/10 via-transparent to-transparent";
    case "ai":
      return "from-rose-500/10 via-transparent to-transparent";
    default:
      return "from-[#3b82f6]/10 via-transparent to-transparent";
  }
};

/* ── main component ──────────────────────────────────────── */

export function Projects() {
  const otherProjects = projectsData.slice(1);
  const flagship = projectsData[0];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 border-t border-white/10"
    >
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 lg:px-16">
        {/* ── Section Header ─────────────────────────────── */}
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#3b82f6] mb-3">
            Work
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] tracking-tight mb-4">
            Projects &amp; Ecosystem
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[#a3a3a8] text-base md:text-lg max-w-2xl leading-relaxed mb-16">
            Building connected systems — from full-stack web platforms and
            automated data pipelines to embedded hardware and edge-AI prototypes.
          </p>
        </Reveal>

        {/* ── Flagship: TwinSparkTech ────────────────────── */}
        <Reveal delay={200}>
          <div className="animated-border rounded-2xl mb-10">
            <div className="bg-[#111113] rounded-2xl border border-white/10 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </span>
                <div className="flex-1 mx-3">
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-md px-3 py-1 text-xs text-[#6b6b70] font-mono truncate max-w-xs">
                    twinsparktech.online
                  </div>
                </div>
              </div>

              {/* Visual placeholder */}
              <div className="relative h-56 md:h-72 bg-gradient-to-br from-[#3b82f6]/[0.08] via-[#111113] to-[#111113] flex items-center justify-center overflow-hidden">
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12)_0%,_transparent_70%)]" />
                <Layout className="w-12 h-12 text-[#3b82f6]/30" />
              </div>

              {/* Content block */}
              <div className="px-6 md:px-8 py-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#fafafa] tracking-tight">
                    {flagship.title}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#3b82f6] border border-[#3b82f6]/30 px-2.5 py-1 rounded">
                    Flagship
                  </span>
                </div>

                <p className="text-[#a3a3a8] text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                  {flagship.description}
                </p>

                {/* Stack strip */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {[
                    { label: "Frontend", value: "Next.js" },
                    { label: "Backend", value: "Cloudflare Workers" },
                    { label: "Database", value: "Firebase" },
                    { label: "Infra", value: "Cloudflare" },
                  ].map((s) => (
                    <span
                      key={s.label}
                      className="font-mono text-xs text-[#a3a3a8] border border-white/10 px-2.5 py-1 rounded inline-flex items-center gap-1.5"
                    >
                      <span className="text-[#6b6b70]">{s.label}</span>
                      {s.value}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={siteConfig.twinsparktech}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#fafafa] bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Site
                  </a>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#a3a3a8] hover:text-[#fafafa] bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Modules & Services ─────────────────────────── */}
        <Reveal delay={280}>
          <div className="mb-20">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#6b6b70] mb-6">
              Modules &amp; Services
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {twinsparkModules.map((mod, i) => (
                <Reveal key={mod.name} delay={320 + i * 60}>
                  <div className="group bg-[#111113] border border-white/[0.06] rounded-xl px-5 py-4 flex items-start justify-between gap-4 hover:border-white/10 transition-colors">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#fafafa] mb-1">
                        {mod.name}
                      </p>
                      <p className="text-xs text-[#6b6b70] leading-relaxed">
                        {mod.description}
                      </p>
                    </div>
                    <div className="shrink-0 pt-0.5">
                      {mod.status === "Live" && mod.url ? (
                        <a
                          href={mod.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[11px] text-[#3b82f6] hover:underline inline-flex items-center gap-1"
                        >
                          Live
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ) : (
                        <span className="font-mono text-[11px] text-[#6b6b70]">
                          {mod.status}
                        </span>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Other Projects ─────────────────────────────── */}
        <Reveal delay={100}>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#fafafa] tracking-tight mb-3">
            Other Projects
          </h3>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-[#a3a3a8] text-sm md:text-base leading-relaxed max-w-xl mb-12">
            From student management systems and data automation to hardware
            prototypes and edge-AI research.
          </p>
        </Reveal>

        <div className="space-y-10">
          {otherProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <Reveal key={project.id} delay={120 + idx * 80}>
                <div
                  className={`bg-[#111113] border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2`}
                >
                  {/* Visual — left on even, right on odd (order swap) */}
                  <div
                    className={`relative h-52 md:h-auto min-h-[220px] flex items-center justify-center overflow-hidden ${
                      !isEven ? "md:order-2" : ""
                    }`}
                  >
                    {/* Radial glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${visualGradient(
                        project.visual
                      )}`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

                    {/* Browser chrome mini */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2">
                        <span className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </span>
                        <span className="font-mono text-[10px] text-[#6b6b70] ml-2 truncate">
                          {project.id}.app
                        </span>
                      </div>
                    </div>

                    {visualIcon(project.visual)}
                  </div>

                  {/* Content */}
                  <div
                    className={`px-6 md:px-8 py-7 flex flex-col justify-center ${
                      !isEven ? "md:order-1" : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h4 className="text-lg md:text-xl font-semibold text-[#fafafa] tracking-tight">
                        {project.title}
                      </h4>
                    </div>

                    <span className="inline-block font-mono text-[10px] uppercase tracking-widest text-[#6b6b70] border border-white/10 px-2.5 py-1 rounded w-fit mb-4">
                      {project.category}
                    </span>

                    <p className="text-[#a3a3a8] text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>

                    <p className="text-[#6b6b70] text-xs leading-relaxed mb-5">
                      <span className="text-[#a3a3a8] font-medium">
                        My Contribution:
                      </span>{" "}
                      {project.contribution}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[11px] text-[#a3a3a8] border border-white/10 px-2.5 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-2.5">
                      {project.links.length > 0 ? (
                        project.links.map((link) =>
                          link.disabled ? (
                            <span
                              key={link.label}
                              className="inline-flex items-center gap-1.5 text-xs text-[#6b6b70] border border-white/[0.06] px-3 py-1.5 rounded-lg cursor-not-allowed"
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
                              className="inline-flex items-center gap-1.5 text-xs text-[#a3a3a8] hover:text-[#fafafa] border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-lg transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                              {link.label}
                            </a>
                          )
                        )
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#6b6b70] border border-white/[0.06] px-3 py-1.5 rounded-lg cursor-default">
                          <Lock className="w-3 h-3" />
                          No public links
                        </span>
                      )}
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
