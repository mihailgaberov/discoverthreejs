import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "three";
import { MathUtils } from "three";

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load("/assets/textures/uv-test-col.png");

  // create a "standard" material
  const material = new MeshStandardMaterial({ map: texture, color: "purple" });

  return material;
}

function createCube(container) {
  // create a geometry
  // const geometry = new BoxGeometry(2, 2, 2);
  const geometry = new CylinderGeometry(5, 5, 20, 32);

  const material = createMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.position.set(-5, 1, 0); // Start position on the left
  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);
  let direction = 1; // Initial direction (1 means moving right, -1 means moving left)
  const speed = 2; // Units per second

  cube.tick = (delta) => {
    // Update rotation
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;

    // Update position
    cube.position.x += direction * speed * delta;

    // Check bounds and reverse direction if needed
    if (cube.position.x > 5 || cube.position.x < -5) {
      direction *= -1;
    }
  };

  return cube;
}

export { createCube };
