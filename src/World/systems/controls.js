import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  controls.target.set(1, 2, 3);

  // controls.enabled = false;
  controls.enableRotate = false;
  controls.enableZoom = true;
  controls.enablePan = false;

  controls.autoRotate = true;
  controls.autoRotateSpeed = 2;
  // controls.minDistance = 5;
  // controls.maxDistance = 20;
  // controls.minAzimuthAngle = -90; // default
  // controls.maxAzimuthAngle = 90; // default

  // controls.minPolarAngle = 90; // default
  // controls.maxPolarAngle = Math.PI; // default

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
