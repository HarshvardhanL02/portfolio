"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { createMechanicalEngine, MechanicalEngineObject } from "@/lib/three/createMechanicalEngine";
import { createReactorCore, ReactorCoreObject } from "@/lib/three/createReactorCore";
import { createProjectModels, ProjectModelBundle } from "@/lib/three/createProjectModels";
import { createSkillsConstellation, SkillsConstellationObject } from "@/lib/three/createSkillsConstellation";
import { createExperienceTimeline, ExperienceTimelineObject } from "@/lib/three/createExperienceTimeline";
import { createEducationCAD, EducationCADObject } from "@/lib/three/createEducationCAD";
import { createContactDish, ContactDishObject } from "@/lib/three/createContactDish";
import { PALETTE } from "@/lib/three/materials";

interface UniverseCanvasProps {
  activeProjectId?: string;
  activeAboutIndex?: number;
  activeSkillIndex?: number;
  activeExpIndex?: number;
}

export function UniverseCanvas({
  activeProjectId = "twinsparktech",
  activeAboutIndex = 0,
  activeSkillIndex = 0,
  activeExpIndex = 0,
}: UniverseCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  // References to communicate with render loop
  const stateRef = useRef({
    activeProjectId,
    activeAboutIndex,
    activeSkillIndex,
    activeExpIndex,
  });

  useEffect(() => {
    stateRef.current = {
      activeProjectId,
      activeAboutIndex,
      activeSkillIndex,
      activeExpIndex,
    };
  }, [activeProjectId, activeAboutIndex, activeSkillIndex, activeExpIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL Check
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // ── 1. Scene, Camera, Renderer ───────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(PALETTE.bg);
    scene.fog = new THREE.FogExp2(PALETTE.bg, 0.022);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: false,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // ── 2. Master Lighting ───────────────────────────────────
    const ambient = new THREE.AmbientLight(0x18181c, 1.4);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 12, 10);
    scene.add(keyLight);

    const blueRim = new THREE.PointLight(PALETTE.electricBlue, 3.0, 30);
    blueRim.position.set(-8, 4, 6);
    scene.add(blueRim);

    const cyanRim = new THREE.PointLight(PALETTE.cyan, 2.5, 30);
    cyanRim.position.set(8, -4, 6);
    scene.add(cyanRim);

    // ── 3. Atmospheric Particles (Dust & Grid Vortex) ────────
    const particleCount = 280;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 35;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 140; // Spans entire Y path
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: PALETTE.electricBlueGlow,
      size: 0.07,
      transparent: true,
      opacity: 0.65,
    });
    const universeParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(universeParticles);

    // ── 4. Sector Models Along Virtual Facility Trajectory ────
    // Sector Y positions:
    // Hero: 0
    // About: -20
    // Projects: -40
    // Skills: -60
    // Experience: -80
    // Education: -100
    // Contact: -120

    const heroEngine: MechanicalEngineObject = createMechanicalEngine();
    heroEngine.group.position.set(0, 0, 0);
    scene.add(heroEngine.group);

    const reactorCore: ReactorCoreObject = createReactorCore();
    reactorCore.group.position.set(0, -20, 0);
    scene.add(reactorCore.group);

    const projectModels: ProjectModelBundle = createProjectModels();
    projectModels.group.position.set(0, -40, 0);
    scene.add(projectModels.group);

    const skillsMatrix: SkillsConstellationObject = createSkillsConstellation();
    skillsMatrix.group.position.set(0, -60, 0);
    scene.add(skillsMatrix.group);

    const expTimeline: ExperienceTimelineObject = createExperienceTimeline();
    expTimeline.group.position.set(0, -80, 0);
    scene.add(expTimeline.group);

    const eduCAD: EducationCADObject = createEducationCAD();
    eduCAD.group.position.set(0, -100, 0);
    scene.add(eduCAD.group);

    const contactDish: ContactDishObject = createContactDish();
    contactDish.group.position.set(0, -120, 0);
    scene.add(contactDish.group);

    // ── 5. Pointer and Scroll Tracking ────────────────────────
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollProgress = 0;
    let targetCameraY = 0;
    let currentCameraY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
        // Total facility height is 120 units
        targetCameraY = -scrollProgress * 120;
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ── 6. Responsive Resize ─────────────────────────────────
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // ── 7. Render Loop ───────────────────────────────────────
    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Lerp pointer
      pointer.x += (pointer.targetX - pointer.x) * 0.08;
      pointer.y += (pointer.targetY - pointer.y) * 0.08;

      // Lerp camera along the facility trajectory
      currentCameraY += (targetCameraY - currentCameraY) * 0.06;

      camera.position.y = currentCameraY;
      camera.position.x = pointer.x * 0.8;
      camera.position.z = 11 + Math.sin(time * 0.4) * 0.2;
      camera.lookAt(0, currentCameraY, 0);

      // Parallax lights
      blueRim.position.y = currentCameraY + 4;
      cyanRim.position.y = currentCameraY - 4;

      // Update active sector models
      const {
        activeProjectId: curProj,
        activeAboutIndex: curAbout,
        activeSkillIndex: curSkill,
        activeExpIndex: curExp,
      } = stateRef.current;

      // Hero engine updates
      const heroHoverFactor = Math.abs(pointer.x) + Math.abs(pointer.y);
      heroEngine.update(time, pointer, heroHoverFactor);

      // About reactor updates
      reactorCore.update(time, curAbout, pointer);

      // Projects hologram updates
      projectModels.update(time, curProj, pointer);

      // Skills constellation updates
      skillsMatrix.update(time, curSkill, pointer);

      // Experience timeline updates
      expTimeline.update(time, curExp, pointer);

      // Education CAD updates
      eduCAD.update(time, pointer);

      // Contact dish updates
      contactDish.update(time, pointer);

      // Universe particles subtle drift
      universeParticles.rotation.y = time * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // ── 8. Cleanup ───────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[#0a0a0b] flex items-center justify-center text-xs font-mono text-[#6b6b70]">
        WebGL fallback mode active
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

export default UniverseCanvas;

