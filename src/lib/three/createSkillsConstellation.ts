import * as THREE from "three";
import { createMaterials, PALETTE } from "./materials";
import { skillsData } from "../data";

export interface SkillsConstellationObject {
  group: THREE.Group;
  update: (time: number, activeCategoryIndex: number, pointer: { x: number; y: number }) => void;
}

/**
 * Creates the 3D Interactive Technology Constellation for the Skills Section:
 * - 4 major orbital category clusters:
 *   1. Programming & Web Development
 *   2. Product & Data
 *   3. Mechanical Engineering
 *   4. CAD & Design
 * - Interactive orbiting skill satellites connected with dynamic laser beams
 */
export function createSkillsConstellation(): SkillsConstellationObject {
  const group = new THREE.Group();
  const mats = createMaterials();

  // Central Constellation Nexus
  const nexus = new THREE.Mesh(new THREE.OctahedronGeometry(1.0, 1), mats.electricBlueEmissive);
  group.add(nexus);

  const clusterGroups: THREE.Group[] = [];
  const clusterDistance = 3.6;

  skillsData.forEach((cat, catIdx) => {
    const angle = (catIdx / skillsData.length) * Math.PI * 2;
    const cluster = new THREE.Group();
    cluster.position.set(
      Math.cos(angle) * clusterDistance,
      (catIdx % 2 === 0 ? 0.7 : -0.7),
      Math.sin(angle) * clusterDistance
    );

    // Cluster Hub
    const hubGeo = new THREE.IcosahedronGeometry(0.48, 0);
    const hubMat = catIdx === 2 || catIdx === 3 ? mats.cyanEmissive : mats.electricBlueEmissive;
    const hub = new THREE.Mesh(hubGeo, hubMat);
    cluster.add(hub);

    // Orbiting halo around cluster
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.02, 8, 24), mats.wireframeCyan);
    halo.rotation.x = Math.PI / 2;
    cluster.add(halo);

    // Individual skill satellite nodes
    const skillNodes: THREE.Mesh[] = [];
    const satCount = Math.min(cat.skills.length, 6);
    for (let s = 0; s < satCount; s++) {
      const sAngle = (s / satCount) * Math.PI * 2;
      const sDist = 1.05;
      const sat = new THREE.Mesh(new THREE.DodecahedronGeometry(0.14, 0), mats.chrome);
      sat.position.set(Math.cos(sAngle) * sDist, (s % 2 === 0 ? 0.25 : -0.25), Math.sin(sAngle) * sDist);
      cluster.add(sat);
      skillNodes.push(sat);

      // Line to hub
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        sat.position,
      ]);
      const line = new THREE.Line(lineGeo, mats.laserBlue);
      cluster.add(line);
    }

    // Laser trunk to central nexus
    const trunkGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      cluster.position,
    ]);
    const trunk = new THREE.Line(trunkGeo, mats.laserCyan);
    group.add(trunk);

    group.add(cluster);
    clusterGroups.push(cluster);
  });

  return {
    group,
    update: (time: number, activeCategoryIndex: number, pointer: { x: number; y: number }) => {
      nexus.rotation.y = time * 0.4;
      nexus.rotation.x = time * 0.2;

      clusterGroups.forEach((cg, idx) => {
        const isActive = idx === activeCategoryIndex;
        const targetScale = isActive ? 1.4 : 1.0;
        cg.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

        cg.rotation.y = time * (0.3 + idx * 0.1);
        cg.position.y += Math.sin(time * 2 + idx) * 0.003;
      });

      group.rotation.y = time * 0.1 + pointer.x * 0.2;
      group.rotation.x = pointer.y * 0.15;
    },
  };
}

