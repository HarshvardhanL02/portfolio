import * as THREE from "three";
import { createMaterials, PALETTE } from "./materials";
import { createTelemetryRing } from "./gearGeometry";

export interface ProjectModelBundle {
  group: THREE.Group;
  update: (time: number, activeProjectId: string, pointer: { x: number; y: number }) => void;
}

/**
 * Procedurally builds the 7 Project 3D Environments:
 * 1. twinsparktech — Futuristic digital command center & network graph
 * 2. pdf-extraction — 3D automated data pipeline: PDF sheets -> laser parser -> JSON cubes
 * 3. counseldesk — Holographic SaaS operations command center
 * 4. sih-disaster — Search & Rescue Drone flying over collapsed terrain grid with thermal cone
 * 5. electric-tricycle — 3D Electric Tricycle electromechanical assembly
 * 6. air-quality — Embedded electronics lab with Arduino Uno, MQ gas sensor, and OLED display
 * 7. pdf-pipeline — Secondary pipeline model
 */
export function createProjectModels(): ProjectModelBundle {
  const group = new THREE.Group();
  const mats = createMaterials();

  // Sub-containers for each project model
  const models: { [id: string]: THREE.Group } = {};

  // ─────────────────────────────────────────────────────────────
  // 1. TWINSPARKTECH COMMAND CENTER
  // ─────────────────────────────────────────────────────────────
  const tstGroup = new THREE.Group();
  models["twinsparktech"] = tstGroup;
  group.add(tstGroup);

  // Central Hub Node
  const centralHub = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 0), mats.electricBlueEmissive);
  tstGroup.add(centralHub);

  // Orbiting prediction engine nodes
  const tstNodes: THREE.Mesh[] = [];
  const nodeCount = 8;
  const tstRadius = 2.8;
  for (let i = 0; i < nodeCount; i++) {
    const angle = (i / nodeCount) * Math.PI * 2;
    const node = new THREE.Mesh(new THREE.IcosahedronGeometry(0.32, 0), mats.chrome);
    node.position.set(Math.cos(angle) * tstRadius, (i % 2 === 0 ? 0.5 : -0.5), Math.sin(angle) * tstRadius);
    tstGroup.add(node);
    tstNodes.push(node);

    // Laser connection
    const lineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      node.position,
    ]);
    const line = new THREE.Line(lineGeo, mats.laserCyan);
    tstGroup.add(line);
  }

  // Dual holographic orbital ring
  const tstRing1 = new THREE.LineSegments(createTelemetryRing(3.4, 48, 0.15), mats.laserBlue);
  tstRing1.rotation.x = Math.PI / 2;
  tstGroup.add(tstRing1);

  // ─────────────────────────────────────────────────────────────
  // 2. GOVERNMENT PDF DATA ENGINE (Pipeline)
  // ─────────────────────────────────────────────────────────────
  const pdfGroup = new THREE.Group();
  models["pdf-extraction"] = pdfGroup;
  group.add(pdfGroup);

  // PDF Document floating plane (Raw input)
  const docGeo = new THREE.BoxGeometry(1.4, 1.9, 0.04);
  const docMesh = new THREE.Mesh(docGeo, mats.holographicGlass);
  docMesh.position.set(-2.4, 0, 0);
  pdfGroup.add(docMesh);

  // Laser scanning grid frame (Extraction stage)
  const scannerFrame = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(0.4, 2.4, 2.4)),
    mats.laserCyan
  );
  scannerFrame.position.set(0, 0, 0);
  pdfGroup.add(scannerFrame);

  // Laser beam scanning up and down
  const laserBeamGeo = new THREE.PlaneGeometry(0.35, 2.3);
  const laserBeam = new THREE.Mesh(laserBeamGeo, mats.cyanEmissive);
  laserBeam.rotation.y = Math.PI / 2;
  pdfGroup.add(laserBeam);

  // Structured JSON Crystal Array (Clean Output)
  const jsonCubes: THREE.Mesh[] = [];
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      const cube = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.26, 0.26), mats.electricBlueEmissive);
      cube.position.set(1.8 + x * 0.45, (y - 1) * 0.45, 0);
      pdfGroup.add(cube);
      jsonCubes.push(cube);
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 3. COUNSELDESK CRM (SaaS Command Matrix)
  // ─────────────────────────────────────────────────────────────
  const crmGroup = new THREE.Group();
  models["counseldesk"] = crmGroup;
  group.add(crmGroup);

  // Floating multi-tier dashboard planes
  for (let i = 0; i < 3; i++) {
    const planeGeo = new THREE.BoxGeometry(2.0, 1.3, 0.05);
    const plane = new THREE.Mesh(planeGeo, mats.holographicGlass);
    plane.position.set((i - 1) * 1.5, (i === 1 ? 0.3 : -0.2), (i - 1) * -0.5);
    plane.rotation.y = (i - 1) * -0.25;
    crmGroup.add(plane);

    // Wireframe edge
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(planeGeo), mats.laserBlue);
    plane.add(edge);
  }

  // Data flow arches
  const curvePoints = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    curvePoints.push(new THREE.Vector3((t - 0.5) * 4.0, Math.sin(t * Math.PI) * 1.4, Math.cos(t * Math.PI) * 0.4));
  }
  const archGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
  const archLine = new THREE.Line(archGeo, mats.laserCyan);
  crmGroup.add(archLine);

  // ─────────────────────────────────────────────────────────────
  // 4. SIH 26177 EDGE-AI DRONE & DISASTER RESPONSE
  // ─────────────────────────────────────────────────────────────
  const sihGroup = new THREE.Group();
  models["sih-disaster"] = sihGroup;
  group.add(sihGroup);

  // Collapsed terrain grid base
  const terrainGeo = new THREE.PlaneGeometry(6, 6, 12, 12);
  const pos = terrainGeo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setZ(i, (Math.random() - 0.5) * 0.5);
  }
  terrainGeo.computeVertexNormals();
  const terrain = new THREE.Mesh(terrainGeo, mats.wireframeCyan);
  terrain.rotation.x = -Math.PI / 2;
  terrain.position.y = -1.6;
  sihGroup.add(terrain);

  // Search Drone Body (Quadcopter)
  const droneGroup = new THREE.Group();
  droneGroup.position.set(0, 0.8, 0);
  sihGroup.add(droneGroup);

  const droneBody = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.2, 0.6), mats.graphite);
  droneGroup.add(droneBody);

  const gimbalCam = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), mats.electricBlueEmissive);
  gimbalCam.position.y = -0.15;
  droneGroup.add(gimbalCam);

  // 4 Drone Arms and Propellers
  const props: THREE.Mesh[] = [];
  const armOffsets = [
    [-0.8, -0.8],
    [0.8, -0.8],
    [-0.8, 0.8],
    [0.8, 0.8],
  ];

  armOffsets.forEach(([ax, az]) => {
    // Arm tube
    const armGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.1);
    const arm = new THREE.Mesh(armGeo, mats.titanium);
    arm.position.set(ax * 0.5, 0, az * 0.5);
    arm.rotation.z = Math.atan2(ax, az);
    droneGroup.add(arm);

    // Motor Hub
    const motor = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.15, 16), mats.chrome);
    motor.position.set(ax, 0.05, az);
    droneGroup.add(motor);

    // Rotor Blade
    const bladeGeo = new THREE.BoxGeometry(0.65, 0.02, 0.06);
    const blade = new THREE.Mesh(bladeGeo, mats.cyanEmissive);
    blade.position.set(ax, 0.14, az);
    droneGroup.add(blade);
    props.push(blade);
  });

  // Downward Thermal Searchlight Cone
  const coneGeo = new THREE.ConeGeometry(1.6, 2.4, 16, 1, true);
  const coneMesh = new THREE.Mesh(coneGeo, mats.wireframeBlue);
  coneMesh.position.y = -1.2;
  droneGroup.add(coneMesh);

  // ─────────────────────────────────────────────────────────────
  // 5. ELECTRIC TRICYCLE ASSEMBLY
  // ─────────────────────────────────────────────────────────────
  const trikeGroup = new THREE.Group();
  models["electric-tricycle"] = trikeGroup;
  group.add(trikeGroup);

  // Tubular Frame (Chassis Spine)
  const spineGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 16);
  const spine = new THREE.Mesh(spineGeo, mats.chrome);
  spine.rotation.z = Math.PI / 2;
  trikeGroup.add(spine);

  // Rear Axle
  const rearAxleGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.4, 16);
  const rearAxle = new THREE.Mesh(rearAxleGeo, mats.chrome);
  rearAxle.position.set(-1.4, -0.2, 0);
  trikeGroup.add(rearAxle);

  // Wheels function
  function createSpokeWheel(): THREE.Group {
    const wGroup = new THREE.Group();
    // Tire
    const tire = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.12, 16, 32), mats.graphite);
    wGroup.add(tire);
    // Hub
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.18, 16), mats.chrome);
    hub.rotation.x = Math.PI / 2;
    wGroup.add(hub);
    // Spokes
    for (let s = 0; s < 8; s++) {
      const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.3), mats.silver);
      sp.rotation.z = (s / 8) * Math.PI;
      wGroup.add(sp);
    }
    return wGroup;
  }

  // Front Wheel
  const frontWheel = createSpokeWheel();
  frontWheel.position.set(1.6, -0.2, 0);
  trikeGroup.add(frontWheel);

  // Rear Left Wheel
  const rearLWheel = createSpokeWheel();
  rearLWheel.position.set(-1.4, -0.2, 1.2);
  trikeGroup.add(rearLWheel);

  // Rear Right Wheel
  const rearRWheel = createSpokeWheel();
  rearRWheel.position.set(-1.4, -0.2, -1.2);
  trikeGroup.add(rearRWheel);

  // Battery Pack Enclosure
  const batteryBox = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.6, 0.7), mats.titanium);
  batteryBox.position.set(-0.3, 0.2, 0);
  trikeGroup.add(batteryBox);

  // Electric Motor Hub (Blue Accent)
  const motorMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.4, 16), mats.electricBlueEmissive);
  motorMesh.position.set(-1.4, 0.1, 0);
  trikeGroup.add(motorMesh);

  // Handlebars & Steering Column
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.3), mats.chrome);
  stem.position.set(1.4, 0.6, 0);
  stem.rotation.z = -0.3;
  trikeGroup.add(stem);

  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.4), mats.chrome);
  bar.position.set(1.2, 1.2, 0);
  trikeGroup.add(bar);

  // ─────────────────────────────────────────────────────────────
  // 6. MINI AIR QUALITY INDICATOR LAB
  // ─────────────────────────────────────────────────────────────
  const aqGroup = new THREE.Group();
  models["air-quality"] = aqGroup;
  group.add(aqGroup);

  // Arduino Uno PCB (Blue Board)
  const boardGeo = new THREE.BoxGeometry(2.4, 0.08, 1.8);
  const pcbMat = new THREE.MeshStandardMaterial({
    color: 0x005c8a, // Arduino Blue
    metalness: 0.3,
    roughness: 0.5,
  });
  const arduino = new THREE.Mesh(boardGeo, pcbMat);
  aqGroup.add(arduino);

  // USB Port and Barrel Jack
  const usb = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.3, 0.45), mats.chrome);
  usb.position.set(-1.0, 0.16, 0.5);
  arduino.add(usb);

  const microchip = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.8), mats.graphite);
  microchip.position.set(0.1, 0.1, -0.1);
  arduino.add(microchip);

  // MQ Gas Sensor (Cylindrical canister with mesh dome)
  const mqCanister = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.5, 24), mats.chrome);
  mqCanister.position.set(0.7, 0.32, 0.4);
  aqGroup.add(mqCanister);

  const mqDome = new THREE.Mesh(new THREE.SphereGeometry(0.35, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mats.wireframeCyan);
  mqDome.position.set(0.7, 0.57, 0.4);
  aqGroup.add(mqDome);

  // 0.96" OLED Display Panel
  const oledBoard = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 1.0), mats.graphite);
  oledBoard.position.set(-0.2, 0.25, -0.4);
  aqGroup.add(oledBoard);

  const oledScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.55), mats.cyanEmissive);
  oledScreen.rotation.x = -Math.PI / 2;
  oledScreen.position.set(-0.2, 0.29, -0.4);
  aqGroup.add(oledScreen);

  // Circuit jumper wires (colored arcs)
  const wireColors = [PALETTE.cyan, PALETTE.electricBlue, PALETTE.warningOrange];
  wireColors.forEach((col, idx) => {
    const pts = [
      new THREE.Vector3(0.5, 0.2, 0.2 + idx * 0.15),
      new THREE.Vector3(0.2, 0.7 + idx * 0.1, 0.1),
      new THREE.Vector3(-0.1, 0.2, -0.2 - idx * 0.1),
    ];
    const curve = new THREE.CatmullRomCurve3(pts);
    const tubeGeo = new THREE.TubeGeometry(curve, 16, 0.02, 8, false);
    const wireMat = new THREE.MeshBasicMaterial({ color: col });
    const wireMesh = new THREE.Mesh(tubeGeo, wireMat);
    aqGroup.add(wireMesh);
  });

  // Position models initially
  Object.keys(models).forEach((key) => {
    models[key].scale.set(0.001, 0.001, 0.001);
    models[key].visible = false;
  });

  // Activate first
  if (models["twinsparktech"]) {
    models["twinsparktech"].visible = true;
    models["twinsparktech"].scale.set(1, 1, 1);
  }

  return {
    group,
    update: (time: number, activeProjectId: string, pointer: { x: number; y: number }) => {
      // Transition models based on activeProjectId
      Object.keys(models).forEach((key) => {
        const targetModel = models[key];
        const isActive = key === activeProjectId || (!models[activeProjectId] && key === "twinsparktech");

        if (isActive) {
          targetModel.visible = true;
          targetModel.scale.lerp(new THREE.Vector3(1, 1, 1), 0.08);
        } else {
          targetModel.scale.lerp(new THREE.Vector3(0.001, 0.001, 0.001), 0.08);
          if (targetModel.scale.x < 0.05) {
            targetModel.visible = false;
          }
        }
      });

      // 1. TST Animation
      centralHub.rotation.y = time * 0.5;
      centralHub.rotation.x = time * 0.3;
      tstRing1.rotation.z = time * 0.2;
      tstNodes.forEach((n, i) => {
        n.rotation.y = time * 0.8 + i;
      });

      // 2. PDF Extraction Animation
      docMesh.position.y = Math.sin(time * 2) * 0.1;
      laserBeam.position.y = Math.sin(time * 3) * 0.9;
      jsonCubes.forEach((cube, i) => {
        cube.rotation.y = time * (0.8 + i * 0.1);
        cube.position.y += Math.sin(time * 3 + i) * 0.003;
      });

      // 3. Drone Animation
      droneGroup.position.y = 0.8 + Math.sin(time * 2.5) * 0.15;
      droneGroup.rotation.z = Math.sin(time * 1.5) * 0.08;
      droneGroup.rotation.x = pointer.y * 0.15;
      props.forEach((p, idx) => {
        p.rotation.y = time * (idx % 2 === 0 ? 25 : -25);
      });

      // 4. Tricycle Animation
      frontWheel.rotation.x = time * 1.2;
      rearLWheel.rotation.x = time * 1.2;
      rearRWheel.rotation.x = time * 1.2;

      // Group overall smooth tilt
      group.rotation.y = time * 0.15 + pointer.x * 0.3;
      group.rotation.x = 0.2 + pointer.y * 0.2;
    },
  };
}

