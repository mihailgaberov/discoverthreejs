import { DirectionalLight } from "three";

function createLights() {
  const light = new DirectionalLight("white", 8);

  // move the light right, up, and towards us
  light.position.set(10, 10, 10);

  light.tick = (delta) => {
    // move the light in a circle
    const radiansPerSecond = Math.PI / 2;
    light.position.x = 10 * Math.sin(radiansPerSecond * delta);
    light.position.z = 10 * Math.cos(radiansPerSecond * delta);
  };

  return light;
}

export { createLights };
