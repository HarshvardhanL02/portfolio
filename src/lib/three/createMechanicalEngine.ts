import * as THREE from "three";
import { createGearGeometry, createTelemetryRing } from "./gearGeometry";
import { createMaterials, PALETTE } from "./materials";

export interface MechanicalEngineObject {
  group: THREE.Group;
  update: (time: number, pointer: { x: number; y: number }, hoverFactor: number) => void;
}

/**
 * Creates the massive 3D Hero Mechanical Engine:
 * - Outer toothed chrome ring
 * - Planetary gear train (sun gear + 3 orbiting planet gears)
 * - Bevel counter-rotating gear ring
 * - Central glowing computational plasma core with energy field
 * - Hydraulic support piston brackets
 * - Floating holographic telemetry rings and laser reticles
 */
export function createMechanicalEngine(): MechanicalEngineObject {
  const group = new THREE.Group();
  const mats = createMaterials();

  // 1. Central Core Reactor Cylinder
  const coreGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.8, 32);
  const coreMesh = new THREE.Mesh(coreGeo, mats.electricBlueEmissive);
  group.add(coreMesh);

  // Core outer energy containment cage
  const cageGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.0, 16, 4, true);
  const cageMesh = new THREE.Mesh(cageGeo, mats.wireframeCyan);
  group.add(cageMesh);

  // 2. Sun Gear (Center)
  const sunGearGeo = createGearGeometry(18, 0.8, 1.3, 0.25, 0.35);
  const sunGear = new THREE.Mesh(sunGearGeo, mats.chrome);
  sunGear.rotation.x = Math.PI / 2;
  group.add(sunGear);

  // 3. Planetary Gears (3 Orbiting gears)
  const planetGears: THREE.Mesh[] = [];
  const planetOrbitRadius = 2.4;
  const planetCount = 3;
  const planetPivot = new THREE.Group();
  group.add(planetPivot);

  const planetGeo = createGearGeometry(12, 0.3, 0.75, 0.2, 0.25);
  for (let i = 0; i < planetCount; i++) {
    const angle = (i / planetCount) * Math.PI * 2;
    const planet = new THREE.Mesh(planetGeo, mats.titanium);
    planet.position.x = Math.cos(angle) * planetOrbitRadius;
    planet.position.z = Math.sin(angle) * planetOrbitRadius;
    planet.rotation.x = Math.PI / 2;
    planetGears.push(planet);
    planetPivot.add(planet);

    // Planet Axle pin
    const pinGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.6, 16);
    const pin = new THREE.Mesh(pinGeo, mats.chrome);
    pin.position.copy(planet.position);
    planetPivot.add(pin);
  }

  // 4. Outer Ring Gear (Large toothed boundary ring)
  const outerRingGeo = new THREE.TorusGeometry(3.6, 0.22, 16, 64);
  const outerRing = new THREE.Mesh(outerRingGeo, mats.titanium);
  outerRing.rotation.x = Math.PI / 2;
  group.add(outerRing);

  // Secondary outer chrome ring with gear notches
  const outerGearGeo = createGearGeometry(42, 3.7, 4.2, 0.3, 0.25);
  const outerGear = new THREE.Mesh(outerGearGeo, mats.chrome);
  outerGear.rotation.x = Math.PI / 2;
  group.add(outerGear);

  // 5. Bevel Bevel Gear Ring (Tilted mechanical collar)
  const bevelRingGeo = new THREE.TorusGeometry(2.9, 0.14, 16, 48);
  const bevelRing = new THREE.Mesh(bevelRingGeo, mats.chrome);
  bevelRing.position.y = 0.55;
  bevelRing.rotation.x = Math.PI / 2;
  group.add(bevelRing);

  const bevelRingLower = bevelRing.clone();
  bevelRingLower.position.y = -0.55;
  group.add(bevelRingLower);

  // 6. Hydraulic Piston Struts (4 corners)
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const strutGroup = new THREE.Group();
    strutGroup.position.x = Math.cos(angle) * 3.4;
    strutGroup.position.z = Math.sin(angle) * 3.4;
    strutGroup.rotation.y = -angle;

    // Cylinder body
    const bodyGeo = new THREE.CylinderGeometry(0.12, 0.12, 1.4, 16);
    const bodyMesh = new THREE.Mesh(bodyGeo, mats.graphite);
    strutGroup.add(bodyMesh);

    // Chrome rod
    const rodGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.2, 16);
    const rodMesh = new THREE.Mesh(rodGeo, mats.chrome);
    rodMesh.position.y = 0.5;
    strutGroup.add(rodMesh);

    group.add(strutGroup);
  }

  // 7. Floating Holographic Telemetry Rings
  const hudRing1Geo = createTelemetryRing(4.6, 64, 0.2);
  const hudRing1 = new THREE.LineSegments(hudRing1Geo, mats.laserCyan);
  hudRing1.rotation.x = Math.PI / 2;
  group.add(hudRing1);

  const hudRing2Geo = createTelemetryRing(5.2, 96, 0.12);
  const hudRing2 = new THREE.LineSegments(hudRing2Geo, mats.laserBlue);
  hudRing2.rotation.x = Math.PI / 2;
  group.add(hudRing2);

  // 8. Dynamic Energy Arc Light
  const coreLight = new THREE.PointLight(PALETTE.electricBlue, 3.5, 12);
  group.add(coreLight);

  const cyanRimLight = new THREE.PointLight(PALETTE.cyan, 2.0, 10);
  cyanRimLight.position.set(0, 1.2, 0);
  group.add(cyanRimLight);

  // Particle Swarm around engine
  const particleCount = 140;
  const particleGeo = new THREE.BufferGeometry();
  const particlePos = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const rad = 1.2 + Math.random() * 4.0;
    const th = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 2.2;
    particlePos[i * 3] = Math.cos(th) * rad;
    particlePos[i * 3 + 1] = y;
    particlePos[i * 3 + 2] = Math.sin(th) * rad;
  }
  particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
  const particleMat = new THREE.PointsMaterial({
    color: PALETTE.electricBlueGlow,
    size: 0.06,
    transparent: true,
    opacity: 0.75,
  });
  const engineParticles = new THREE.Points(particleGeo, particleMat);
  group.add(engineParticles);

  return {
    group,
    update: (time: number, pointer: { x: number; y: number }, hoverFactor: number) => {
      const speed = 1.0 + hoverFactor * 2.0;

      // Sun gear spins clockwise
      sunGear.rotation.z = time * 0.8 * speed;

      // Planets rotate on their own axis and orbit around center
      planetPivot.rotation.y = time * 0.35 * speed;
      planetGears.forEach((pg) => {
        pg.rotation.z = -time * 1.5 * speed;
      });

      // Outer ring gear counter-rotates
      outerGear.rotation.z = -time * 0.25 * speed;

      // Bevel rings counter-tilt and spin
      bevelRing.rotation.z = time * 0.4 * speed;
      bevelRingLower.rotation.z = -time * 0.4 * speed;

      // HUD rings rotate
      hudRing1.rotation.z = time * 0.12;
      hudRing2.rotation.z = -time * 0.08;

      // Core pulse
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.08 + hoverFactor * 0.15;
      coreMesh.scale.set(pulse, 1.0, pulse);
      coreLight.intensity = (3.0 + Math.sin(time * 4) * 1.0) * (1.0 + hoverFactor);

      // Subtle tilt from mouse pointer
      group.rotation.x = Math.PI * 0.12 + pointer.y * 0.25;
      group.rotation.y = time * 0.15 + pointer.x * 0.35;
      group.position.y = Math.sin(time * 0.8) * 0.15;

      // Particles orbit
      engineParticles.rotation.y = time * 0.2;
    },
  };
}

