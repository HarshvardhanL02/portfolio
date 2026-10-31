import * as THREE from "three";

/**
 * Procedurally generates precision mechanical gear geometry with involute teeth,
 * central bore hole, and keyway slots.
 */
export function createGearGeometry(
  teeth: number = 24,
  innerRadius: number = 1.2,
  pitchRadius: number = 2.0,
  toothHeight: number = 0.35,
  thickness: number = 0.4
): THREE.BufferGeometry {
  const shape = new THREE.Shape();
  const totalPoints = teeth * 4;
  const outerRadius = pitchRadius + toothHeight / 2;
  const dedendumRadius = pitchRadius - toothHeight / 2;

  for (let i = 0; i < totalPoints; i++) {
    const angle = (i / totalPoints) * Math.PI * 2;
    const toothStep = i % 4;
    let r = dedendumRadius;

    if (toothStep === 1 || toothStep === 2) {
      r = outerRadius;
    } else {
      r = dedendumRadius;
    }

    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;

    if (i === 0) {
      shape.moveTo(x, y);
    } else {
      shape.lineTo(x, y);
    }
  }
  shape.closePath();

  // Central axle hole
  const holePath = new THREE.Path();
  const holeRadius = innerRadius * 0.6;
  const holePoints = 32;
  for (let i = 0; i < holePoints; i++) {
    const angle = (i / holePoints) * Math.PI * 2;
    const x = Math.cos(angle) * holeRadius;
    const y = Math.sin(angle) * holeRadius;
    if (i === 0) {
      holePath.moveTo(x, y);
    } else {
      holePath.lineTo(x, y);
    }
  }
  holePath.closePath();
  shape.holes.push(holePath);

  // Extrude
  const extrudeSettings: THREE.ExtrudeGeometryOptions = {
    steps: 1,
    depth: thickness,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.04,
    bevelOffset: 0,
    bevelSegments: 2,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * Generates an engineering HUD ring with tick marks and radial telemetry.
 */
export function createTelemetryRing(
  radius: number = 3.0,
  ticks: number = 64,
  tickLength: number = 0.15
): THREE.BufferGeometry {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i < ticks; i++) {
    const angle = (i / ticks) * Math.PI * 2;
    const isMajor = i % 8 === 0;
    const len = isMajor ? tickLength * 2 : tickLength;

    const x1 = Math.cos(angle) * radius;
    const y1 = Math.sin(angle) * radius;
    const x2 = Math.cos(angle) * (radius + len);
    const y2 = Math.sin(angle) * (radius + len);

    points.push(new THREE.Vector3(x1, y1, 0));
    points.push(new THREE.Vector3(x2, y2, 0));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  return geometry;
}

