import { World } from "./World/World.js";

function main() {
  const container = document.querySelector("#scene-container");
  // const toggleButton = document.querySelector("#toggle-button");
  const world = new World(container);
  let isRunning = false;

  // toggleButton.addEventListener("click", () => {
  //   if (isRunning) {
  //     world.stop();
  //     isRunning = false;
  //     toggleButton.textContent = "Start";
  //   } else {
  //     world.start();
  //     isRunning = true;
  //     toggleButton.textContent = "Stop";
  //   }
  // });
  world.start();
}

main();
