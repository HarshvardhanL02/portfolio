"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { CinematicIntro } from "@/components/ui/CinematicIntro";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// Dynamically import Master 3D UniverseCanvas to avoid SSR issues
const UniverseCanvas = dynamic(
  () => import("@/components/three/UniverseCanvas"),
  { ssr: false }
);

export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState("twinsparktech");
  const [activeAboutIndex, setActiveAboutIndex] = useState(0);
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [activeExpIndex, setActiveExpIndex] = useState(0);

  const handleReplayIntro = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("hl_intro_seen");
      window.location.reload();
    }
  };

  return (
    <>
      {/* 1. Cinematic Opening Sequence (Skippable) */}
      <CinematicIntro onComplete={() => setIntroFinished(true)} />

      {/* 2. Full-Screen Connected 3D Universe Canvas */}
      <UniverseCanvas
        activeProjectId={activeProjectId}
        activeAboutIndex={activeAboutIndex}
        activeSkillIndex={activeSkillIndex}
        activeExpIndex={activeExpIndex}
      />

      {/* 3. Interactive Engineering HUD Overlay */}
      <div className="relative z-10">
        <Navbar onReplayIntro={handleReplayIntro} />
        <main id="main">
          <Hero />
          <About
            activeIndex={activeAboutIndex}
            onSelectIndex={setActiveAboutIndex}
          />
          <Projects
            activeProjectId={activeProjectId}
            onSelectProjectId={setActiveProjectId}
          />
          <Skills
            activeSkillIndex={activeSkillIndex}
            onSelectSkillIndex={setActiveSkillIndex}
          />
          <Experience
            activeIndex={activeExpIndex}
            onSelectIndex={setActiveExpIndex}
          />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
