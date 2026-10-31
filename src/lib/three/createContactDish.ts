import * as THREE from "three";
import { createMaterials, PALETTE } from "./materials";
import { createTelemetryRing } from "./gearGeometry";

export interface ContactDishObject {
  group: THREE.Group;
  update: (time: number, pointer: { x: number; y: number }) => void;
}

/**
 * Creates the 3D Deep-Space Quantum Communication Dish for the Contact Section:
 * - Parabolic chrome reflector dish
 * - Quad-strut feed horn assembly
 * - Concentric holographic emitter rings
 * - Light transmission pulse beam
 */
export function createContactDish(): ContactDishObject {
  const group = new THREE.Group();
  const mats = createMaterials();

  // 1. Parabolic Main Dish
  const dishGeo = new THREE.SphereGeometry(2.8, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.42);
  const dish = new THREE.Mesh(dishGeo, mats.chrome);
  dish.rotation.x = Math.PI / 2;
  group.add(dish);

  // Dish Outer Rim Collar
  const rimGeo = new THREE.TorusGeometry(2.3, 0.12, 16, 48);
  const rim = new THREE.Mesh(rimGeo, mats.titanium);
  rim.position.z = 0.8;
  group.add(rim);

  // 2. Feed Horn Subreflector (Center emitter)
  const hornGeo = new THREE.ConeGeometry(0.35, 0.8, 16);
  const horn = new THREE.Mesh(hornGeo, mats.electricBlueEmissive);
  horn.rotation.x = -Math.PI / 2;
  horn.position.z = 2.4;
  group.add(horn);

  // 4 Support Struts connecting rim to horn
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const pts = [
      new THREE.Vector3(Math.cos(angle) * 2.3, Math.sin(angle) * 2.3, 0.8),
      new THREE.Vector3(0, 0, 2.4),
    ];
    const strutGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const strut = new THREE.Line(strutGeo, mats.laserCyan);
    group.add(strut);
  }

  // 3. Concentric Holographic Telemetry Rings
  const ring1 = new THREE.LineSegments(createTelemetryRing(3.2, 48, 0.15), mats.laserBlue);
  ring1.position.z = 0.5;
  group.add(ring1);

  const ring2 = new THREE.LineSegments(createTelemetryRing(3.8, 64, 0.2), mats.laserCyan);
  ring2.position.z = 0.2;
  group.add(ring2);

  // 4. Signal Pulse Core Light
  const signalLight = new THREE.PointLight(PALETTE.electricBlue, 3.5, 12);
  signalLight.position.set(0, 0, 2.4);
  group.add(signalLight);

  return {
    group,
    update: (time: number, pointer: { x: number; y: number }) => {
      ring1.rotation.z = time * 0.15;
      ring2.rotation.z = -time * 0.1;

      // Pulse emitter
      signalLight.intensity = 2.5 + Math.sin(time * 6) * 1.5;

      // Interactive dish steering
      group.rotation.x = -0.3 + pointer.y * 0.25;
      group.rotation.y = time * 0.08 + pointer.x * 0.35;
    },
  };
}

