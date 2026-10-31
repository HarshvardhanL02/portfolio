import * as THREE from "three";

/**
 * Materials & Palettes for the Digital Engineering Universe
 * Colors: Deep black, graphite, metallic silver, electric blue, subtle cyan, white highlights.
 */

export const PALETTE = {
  bg: 0x050507,
  black: 0x0a0a0c,
  graphite: 0x18181c,
  titanium: 0x2e3038,
  chrome: 0xd8dde8,
  silver: 0xa0a5b5,
  electricBlue: 0x3b82f6,
  electricBlueGlow: 0x60a5fa,
  cyan: 0x06b6d4,
  cyanGlow: 0x38bdf8,
  white: 0xffffff,
  warningOrange: 0xf59e0b,
  emeraldGreen: 0x10b981,
};

export function createMaterials() {
  // Reflective Chrome
  const chrome = new THREE.MeshStandardMaterial({
    color: PALETTE.chrome,
    metalness: 0.95,
    roughness: 0.15,
  });

  // Metallic Silver
  const silver = new THREE.MeshStandardMaterial({
    color: PALETTE.silver,
    metalness: 0.9,
    roughness: 0.25,
  });

  // Brushed Titanium / Steel
  const titanium = new THREE.MeshStandardMaterial({
    color: PALETTE.titanium,
    metalness: 0.8,
    roughness: 0.35,
  });

  // Dark Industrial Graphite
  const graphite = new THREE.MeshStandardMaterial({
    color: PALETTE.graphite,
    metalness: 0.5,
    roughness: 0.7,
  });

  // Electric Blue Glow
  const electricBlueEmissive = new THREE.MeshStandardMaterial({
    color: PALETTE.electricBlue,
    emissive: PALETTE.electricBlue,
    emissiveIntensity: 0.8,
    metalness: 0.2,
    roughness: 0.2,
  });

  // Subtle Cyan Glow
  const cyanEmissive = new THREE.MeshStandardMaterial({
    color: PALETTE.cyan,
    emissive: PALETTE.cyan,
    emissiveIntensity: 0.7,
    metalness: 0.1,
    roughness: 0.2,
  });

  // Holographic Wireframe
  const wireframeCyan = new THREE.MeshBasicMaterial({
    color: PALETTE.cyanGlow,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });

  const wireframeBlue = new THREE.MeshBasicMaterial({
    color: PALETTE.electricBlueGlow,
    wireframe: true,
    transparent: true,
    opacity: 0.4,
  });

  // Frosted Glass / HUD Panel
  const holographicGlass = new THREE.MeshPhysicalMaterial({
    color: 0x1a2638,
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.85,
    thickness: 0.5,
    transparent: true,
    opacity: 0.65,
  });

  // Glowing Line Material
  const laserBlue = new THREE.LineBasicMaterial({
    color: PALETTE.electricBlueGlow,
    transparent: true,
    opacity: 0.75,
  });

  const laserCyan = new THREE.LineBasicMaterial({
    color: PALETTE.cyanGlow,
    transparent: true,
    opacity: 0.6,
  });

  return {
    chrome,
    silver,
    titanium,
    graphite,
    electricBlueEmissive,
    cyanEmissive,
    wireframeCyan,
    wireframeBlue,
    holographicGlass,
    laserBlue,
    laserCyan,
  };
}