import EventEmitter from "./EventEmitter";

class Sizes extends EventEmitter {
  width;
  height;
  pixelRatio;
  constructor() {
    super();

    // Initial
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Resize occuring
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    //   emit event
      this.trigger("resize");
    });
  }
}
export default Sizes;
