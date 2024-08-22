import {
  SphereGeometry,
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "three";

function createMeshGroup() {
  const group = new Group();

  const geometry = new SphereGeometry(0.25, 16, 16);
  const material = new MeshStandardMaterial({
    color: "indigo",
  });
  const protoSphere = new Mesh(geometry, material);

  // create twenty clones of the protoSphere
  // and add each to the group
  for (let i = 0; i < 1; i += 0.05) {
    const sphere = protoSphere.clone();
    // position the spheres on around a circle
    sphere.position.x = Math.cos(2 - Math.PI - i);
    sphere.position.y = Math.sin(2 - Math.PI - i);
    sphere.scale.multiplyScalar(0.01 + i);

    group.add(sphere);
  }

  group.add(protoSphere);

  group.scale.multiplyScalar(2);

  // spin the wheel
  const radiansPerSecond = MathUtils.degToRad(30);

  // each frame, rotate the entire group of spheres
  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond;
  };

  return group;
}

export { createMeshGroup };
