import * as THREE from "three";
import { createMaterials, PALETTE } from "./materials";
import { createGearGeometry } from "./gearGeometry";

export interface ExperienceTimelineObject {
  group: THREE.Group;
  update: (time: number, activeIndex: number, pointer: { x: number; y: number }) => void;
}

/**
 * Creates the 3D Industrial Timeline structure:
 * - Elevated chrome monorail / gantry spine
 * - 3 Floating milestone docking stations:
 *   1. Aditya Counselling Intern (Apr 2026 - Present)
 *   2. TwinSparkTech Independent Software Builder
 *   3. MITAOE B.E. Mechanical Engineering (2025 - 2029)
 * - Rotating mechanical guide rings and energy conduits
 */
export function createExperienceTimeline(): ExperienceTimelineObject {
  const group = new THREE.Group();
  const mats = createMaterials();

  // 1. Industrial Monorail Gantry Spine (Linear Truss)
  const trackLength = 10;
  const trackGeo = new THREE.CylinderGeometry(0.08, 0.08, trackLength, 16);
  const track = new THREE.Mesh(trackGeo, mats.chrome);
  track.rotation.z = Math.PI / 2;
  group.add(track);

  // Twin secondary guide rails
  const rail1 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, trackLength, 16), mats.titanium);
  rail1.rotation.z = Math.PI / 2;
  rail1.position.y = 0.4;
  group.add(rail1);

  const rail2 = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, trackLength, 16), mats.titanium);
  rail2.rotation.z = Math.PI / 2;
  rail2.position.y = -0.4;
  group.add(rail2);

  // 2. 3 Milestone Docking Stations
  const stations: THREE.Group[] = [];
  const stationX = [-3.2, 0.0, 3.2];

  stationX.forEach((xPos, idx) => {
    const station = new THREE.Group();
    station.position.x = xPos;

    // Outer Gear Collar
    const gearGeo = createGearGeometry(20, 0.5, 0.9, 0.2, 0.25);
    const gear = new THREE.Mesh(gearGeo, mats.chrome);
    gear.rotation.y = Math.PI / 2;
    station.add(gear);

    // Inner Glowing Marker Sphere
    const coreMat = idx === 0 ? mats.electricBlueEmissive : idx === 1 ? mats.cyanEmissive : mats.wireframeBlue;
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 16), coreMat);
    station.add(sphere);

    // Holographic Telemetry Pedestal
    const pedestal = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.4, 0.8), mats.holographicGlass);
    pedestal.position.y = -1.0;
    station.add(pedestal);

    // Edge highlight
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(0.8, 1.4, 0.8)), mats.laserCyan);
    edge.position.y = -1.0;
    station.add(edge);

    group.add(station);
    stations.push(station);
  });

  return {
    group,
    update: (time: number, activeIndex: number, pointer: { x: number; y: number }) => {
      stations.forEach((st, idx) => {
        const gear = st.children[0];
        gear.rotation.x = time * 0.8 * (idx % 2 === 0 ? 1 : -1);

        const isActive = idx === activeIndex;
        const targetScale = isActive ? 1.3 : 1.0;
        st.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      });

      group.rotation.y = time * 0.05 + pointer.x * 0.15;
      group.rotation.x = pointer.y * 0.15;
    },
  };
}

