"use client";

import { useEffect, useState } from "react";
import { sound } from "@/lib/three/audioEngine";

interface CinematicIntroProps {
  onComplete: () => void;
}

export function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<number>(1);
  const [skipped, setSkipped] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    // Check if user has already seen intro in this session
    const seen = sessionStorage.getItem("hl_intro_seen");
    if (seen === "true") {
      setSkipped(true);
      onComplete();
      return;
    }

    // Sequence timeline
    const t1 = setTimeout(() => {
      setPhase(2);
      setProgress(25);
    }, 900);

    const t2 = setTimeout(() => {
      setPhase(3);
      setProgress(50);
    }, 2200);

    const t3 = setTimeout(() => {
      setPhase(4);
      setProgress(75);
    }, 3600);

    const t4 = setTimeout(() => {
      setPhase(5);
      setProgress(90);
      sound.playEngage();
    }, 4800);

    const t5 = setTimeout(() => {
      setPhase(6);
      setProgress(100);
      handleFinish();
    }, 6200);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("hl_intro_seen", "true");
    setSkipped(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  const handleSkip = () => {
    sound.playClick();
    handleFinish();
  };

  if (skipped) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050507] transition-opacity duration-1000 ${
        phase === 6 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12)_0%,_transparent_75%)] pointer-events-none" />

      {/* Engineering Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Telemetry Corner Indicators */}
      <div className="absolute top-8 left-8 font-mono text-[11px] text-[#6b6b70] tracking-widest uppercase flex flex-col gap-1">
        <span>SYS: HL-CORE // INITIALIZING</span>
        <span className="text-[#3b82f6]">FACILITY: DIGITAL ENGINEERING UNIVERSE</span>
      </div>

      <div className="absolute top-8 right-8 font-mono text-[11px] text-[#6b6b70] tracking-widest uppercase text-right flex flex-col gap-1">
        <span>LAT: 18.6757° N // LON: 73.8893° E</span>
        <span className="text-[#06b6d4]">STATUS: CALIBRATING VOLUMETRICS</span>
      </div>

      {/* Main Cinematic Monogram Stage */}
      <div className="relative flex flex-col items-center justify-center text-center px-6">
        {/* Phase 1-2: Particle Accretion Ring */}
        <div
          className={`relative w-40 h-40 sm:w-52 sm:h-52 rounded-full border border-white/10 flex items-center justify-center transition-all duration-1000 ${
            phase >= 2 ? "scale-100 opacity-100 border-[#3b82f6]/40" : "scale-50 opacity-0"
          }`}
        >
          {/* Rotating Laser Reticle */}
          <div
            className="absolute inset-[-12px] rounded-full border border-dashed border-[#06b6d4]/40 animate-spin"
            style={{ animationDuration: "14s" }}
          />

          {/* Phase 3-5: 3D Metallic HL Identity */}
          <div
            className={`transition-all duration-700 transform ${
              phase >= 3 ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <div className="relative">
              <span className="font-sans font-black text-6xl sm:text-7xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-[#c8cdd8] to-[#4b5563] drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                HL
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#3b82f6] shadow-[0_0_12px_#3b82f6]" />
            </div>
          </div>
        </div>

        {/* Phase 4-5: Title Typography */}
        <div
          className={`mt-8 transition-all duration-700 ${
            phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#3b82f6] mb-1">
            HARSHVARDHAN LOKHANDE
          </p>
          <p className="text-sm font-medium text-[#a3a3a8] tracking-wide">
            THE DIGITAL ENGINEERING UNIVERSE
          </p>
        </div>

        {/* Dynamic telemetry prompt */}
        <div className="mt-6 font-mono text-[10px] text-[#6b6b70] tracking-widest uppercase">
          {phase === 1 && "SCANNING VOID MATRIX..."}
          {phase === 2 && "CALIBRATING QUANTUM PARTICLES..."}
          {phase === 3 && "EMERGING MECHANICAL ARCHITECTURE..."}
          {phase === 4 && "LOCKING PRECISION SENSORS..."}
          {phase >= 5 && "ONLINE // ENGAGING SYSTEM"}
        </div>
      </div>

      {/* Bottom Bar: Skip Sequence Control */}
      <div className="absolute bottom-8 inset-x-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-[#6b6b70]">{progress}%</span>
        </div>

        <button
          onClick={handleSkip}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#3b82f6]/50 transition-all font-mono text-xs text-[#a3a3a8] hover:text-white"
        >
          <span>SKIP SEQUENCE</span>
          <span className="text-[10px] text-[#6b6b70] border border-white/10 px-1 rounded">ESC</span>
        </button>
      </div>
    </div>
  );
}

export default CinematicIntro;

