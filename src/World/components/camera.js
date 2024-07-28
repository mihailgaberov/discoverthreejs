import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(10, 10, 10);
  camera.rotation.set(0.1, 0.1, 0.1);

  let time = 0;

  camera.tick = (delta) => {
    time += delta;
    // Create a smooth oscillation using a sine wave
    // camera.position.z = 10 + Math.sin(time) * 10;
  };

  return camera;
}

export { createCamera };
