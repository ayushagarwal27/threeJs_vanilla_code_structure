import * as THREE from "three";
import Experience from "../Experience";
import Environment from "./Environment";

class World {
  experience;
  scene;
  environment;
  resources;

  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial()
    );
    this.scene.add(testMesh);

    // this.experience.resources.on("ready", () => {
    //   console.log("ready :)");
    // });

    // Setup
    this.environment = new Environment();
  }
}

export default World;
