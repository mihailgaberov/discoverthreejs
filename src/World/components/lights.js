import { DirectionalLight, AmbientLight, HemisphereLight } from "three";

function createLights() {
  const hemisphereLight = new HemisphereLight("white", "darkslategrey", 3);
  const ambientLight = new AmbientLight("white", 2);

  const mainLight = new DirectionalLight("white", 5);
  mainLight.position.set(10, 10, 10);

  mainLight.tick = () => {};

  return { ambientLight, mainLight, hemisphereLight };
}
export { createLights };
