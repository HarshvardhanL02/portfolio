import * as THREE from "three";
import { createMaterials } from "./materials";
import { createGearGeometry } from "./gearGeometry";

export interface EducationCADObject {
  group: THREE.Group;
  update: (time: number, pointer: { x: number; y: number }) => void;
}

/**
 * Creates the 3D Futuristic CAD Drafting Workspace for Education:
 * - Holographic blueprint coordinate plane
 * - Floating wireframe precision spur gear
 * - Precision Vernier caliper gauge model
 * - Isometric mechanical drafting grids
 */
export function createEducationCAD(): EducationCADObject {
  const group = new THREE.Group();
  const mats = createMaterials();

  // 1. Holographic Blueprint Grid Plane
  const gridHelper = new THREE.GridHelper(6, 24, 0x3b82f6, 0x1e293b);
  gridHelper.position.y = -1.2;
  group.add(gridHelper);

  // 2. Rotating Wireframe Spur Gear (Drafting inspection)
  const gearGeo = createGearGeometry(24, 0.8, 1.8, 0.35, 0.3);
  const gear = new THREE.Mesh(gearGeo, mats.wireframeCyan);
  gear.rotation.x = Math.PI / 4;
  group.add(gear);

  // Solid axle sleeve
  const axle = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.45, 1.2, 24), mats.chrome);
  axle.rotation.x = Math.PI / 4;
  group.add(axle);

  // 3. Digital Vernier Caliper Model
  const caliperGroup = new THREE.Group();
  caliperGroup.position.set(0, 1.4, 0);

  // Main beam
  const beam = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.16, 0.06), mats.chrome);
  caliperGroup.add(beam);

  // Fixed main jaw
  const mainJaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.2, 0.06), mats.chrome);
  mainJaw.position.set(-1.7, -0.5, 0);
  caliperGroup.add(mainJaw);

  // Sliding vernier jaw
  const slideJaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.2, 0.08), mats.titanium);
  slideJaw.position.set(0.4, -0.5, 0);
  caliperGroup.add(slideJaw);

  // Digital readout screen on caliper
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.2), mats.cyanEmissive);
  screen.position.set(0.4, 0.15, 0.05);
  caliperGroup.add(screen);

  group.add(caliperGroup);

  return {
    group,
    update: (time: number, pointer: { x: number; y: number }) => {
      gear.rotation.z = time * 0.4;
      axle.rotation.z = time * 0.4;

      // Subtle caliper jaw breathing movement
      slideJaw.position.x = 0.4 + Math.sin(time * 1.5) * 0.3;
      screen.position.x = slideJaw.position.x;

      group.rotation.y = time * 0.1 + pointer.x * 0.25;
      group.rotation.x = 0.2 + pointer.y * 0.2;
    },
  };
}

