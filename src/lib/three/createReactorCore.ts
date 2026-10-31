import * as THREE from "three";
import { createMaterials, PALETTE } from "./materials";
import { createTelemetryRing } from "./gearGeometry";

export interface ReactorCoreObject {
  group: THREE.Group;
  nodes: THREE.Mesh[];
  update: (time: number, activeIndex: number, pointer: { x: number; y: number }) => void;
}

/**
 * Creates the 3D Mechanical Reactor for the About Section:
 * - Magnetic confinement torus
 * - 4 orbiting magnetic field coils
 * - Central fusion plasma stream
 * - 4 interactive telemetry nodes (Mechanical, Software, Product, Automation)
 */
export function createReactorCore(): ReactorCoreObject {
  const group = new THREE.Group();
  const mats = createMaterials();

  // 1. Central Plasma Core (Glowing double sphere with internal pulse)
  const innerCoreGeo = new THREE.SphereGeometry(1.0, 32, 32);
  const innerCore = new THREE.Mesh(innerCoreGeo, mats.electricBlueEmissive);
  group.add(innerCore);

  const outerCoreGeo = new THREE.SphereGeometry(1.25, 24, 24);
  const outerCore = new THREE.Mesh(outerCoreGeo, mats.wireframeCyan);
  group.add(outerCore);

  // 2. Toroidal Confinement Ring (Main Tokamak ring)
  const torusGeo = new THREE.TorusGeometry(3.0, 0.35, 24, 64);
  const torusMesh = new THREE.Mesh(torusGeo, mats.chrome);
  group.add(torusMesh);

  // Secondary wireframe torus
  const torusWireGeo = new THREE.TorusGeometry(3.05, 0.4, 16, 48);
  const torusWire = new THREE.Mesh(torusWireGeo, mats.wireframeBlue);
  group.add(torusWire);

  // 3. Magnetic Poloidal Coils (4 perpendicular rings)
  const coils: THREE.Group[] = [];
  for (let i = 0; i < 4; i++) {
    const coilGroup = new THREE.Group();
    const coilGeo = new THREE.TorusGeometry(1.6, 0.12, 16, 32);
    const coil = new THREE.Mesh(coilGeo, mats.titanium);
    coilGroup.add(coil);

    const coilGlow = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.05, 8, 32), mats.cyanEmissive);
    coilGroup.add(coilGlow);

    coilGroup.rotation.y = (i / 4) * Math.PI;
    group.add(coilGroup);
    coils.push(coilGroup);
  }

  // 4. 4 Interactive Telemetry Nodes:
  // 0: Mechanical Engineering
  // 1: Software Development
  // 2: Product Management
  // 3: Automation & Engineering Research
  const nodes: THREE.Mesh[] = [];
  const nodePivots: THREE.Group[] = [];
  const nodeDistance = 4.4;

  const nodeLabels = ["Mechanical", "Software", "Product", "Automation"];
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const pivot = new THREE.Group();

    // Node geometry: precision diamond / octahedron inside ring
    const nodeGeo = new THREE.OctahedronGeometry(0.38, 0);
    const nodeMesh = new THREE.Mesh(nodeGeo, mats.electricBlueEmissive);
    nodeMesh.position.set(Math.cos(angle) * nodeDistance, (i % 2 === 0 ? 0.6 : -0.6), Math.sin(angle) * nodeDistance);
    nodeMesh.userData = { id: i, label: nodeLabels[i] };

    // Orbiting ring around node
    const haloGeo = new THREE.TorusGeometry(0.55, 0.03, 8, 24);
    const haloMesh = new THREE.Mesh(haloGeo, mats.wireframeCyan);
    nodeMesh.add(haloMesh);

    pivot.add(nodeMesh);
    group.add(pivot);
    nodes.push(nodeMesh);
    nodePivots.push(pivot);

    // Laser connection line from core to node
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      nodeMesh.position,
    ]);
    const line = new THREE.Line(lineGeo, mats.laserBlue);
    group.add(line);
  }

  // 5. HUD Telemetry ring around reactor
  const hudGeo = createTelemetryRing(5.2, 72, 0.2);
  const hudRing = new THREE.LineSegments(hudGeo, mats.laserCyan);
  hudRing.rotation.x = Math.PI / 2;
  group.add(hudRing);

  // 6. Point lights
  const coreLight = new THREE.PointLight(PALETTE.cyan, 3.0, 10);
  group.add(coreLight);

  return {
    group,
    nodes,
    update: (time: number, activeIndex: number, pointer: { x: number; y: number }) => {
      // Rotate Torus and Coils
      torusMesh.rotation.z = time * 0.25;
      torusWire.rotation.z = -time * 0.15;

      coils.forEach((c, idx) => {
        c.rotation.z = time * 0.3 * (idx % 2 === 0 ? 1 : -1);
      });

      // Core pulse
      const pulse = 1.0 + Math.sin(time * 3.0) * 0.08;
      innerCore.scale.set(pulse, pulse, pulse);
      outerCore.rotation.y = time * 0.4;
      outerCore.rotation.x = time * 0.25;

      // Update interactive nodes
      nodes.forEach((node, idx) => {
        const isActive = idx === activeIndex;
        const targetScale = isActive ? 1.6 : 1.0;
        node.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        node.rotation.y = time * 1.5;
        node.rotation.x = time * 0.8;

        if (isActive) {
          node.position.y += Math.sin(time * 4) * 0.005;
        }
      });

      hudRing.rotation.z = time * 0.1;

      // Pointer tilt
      group.rotation.x = pointer.y * 0.2 + 0.3;
      group.rotation.y = time * 0.1 + pointer.x * 0.25;
    },
  };
}

