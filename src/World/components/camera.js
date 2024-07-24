import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100 // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 10);
  camera.rotation.set(0.1, 0.1, 0.1);

  camera.tick = (delta) => {
    camera.position.z += delta;
  };

  return camera;
}

export { createCamera };
