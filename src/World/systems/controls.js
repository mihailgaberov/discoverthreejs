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
  controls.autoRotateSpeed = 23;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
