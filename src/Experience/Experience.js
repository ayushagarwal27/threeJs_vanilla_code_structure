import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Resources from "./Utils/Resources";
import sources from "./sources.js";

let instance = null; // Singleton Pattern

class Experience {
  canvas;
  sizes;
  time;
  scene;
  camera;
  renderer;
  world;
  resources;

  constructor(canvasEl) {
    if (instance) {
      return instance;
    }
    instance = this;

    window.experience = this;
    this.canvas = canvasEl;

    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();
    this.resources = new Resources(sources);

    // resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    // time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }
  update() {
    this.camera.update();
    this.renderer.update();
  }
}

export default Experience;
