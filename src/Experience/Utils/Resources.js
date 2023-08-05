import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import EventEmitter from "./EventEmitter";

class Resources extends EventEmitter{
  sources;
  items = {};
  toLoad;
  loaded = 0;
  loaders = {};
  constructor(sources) {
    super();
    this.sources = sources;
    this.toLoad = this.sources.length;
    this.setLoaders();
    this.startLoading();
  }

  setLoaders() {
    this.loaders.gltfLoader = new GLTFLoader();
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
  }

  startLoading() {
    this.sources.forEach((source, index) => {
      switch (source.type) {
        case "gltfModel": {
          this.loaders.gltfLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
          break;
        }
        case "texture": {
          this.loaders.textureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
          break;
        }
        case "cubeTexture": {
          this.loaders.cubeTextureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
          break;
        }
        default: {
          return null;
        }
      }
    });
  }

  sourceLoaded(source, file) {
    this.items[source.name] = file;
    this.loaded++;

    if (this.loaded === this.toLoad) {
      this.trigger("ready");
    }
  }
}

export default Resources;
