import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

class SCR {
  constructor(container, objCamera = { fov: 50, near: 0.1, far: 2000 }) {
    const { clientWidth, clientHeight } = container;
    const { fov, near, far } = objCamera;
    const aspect = clientWidth / clientHeight;

    this.scene = new Scene();
    this.camera = new PerspectiveCamera(fov, aspect, near, far);
    this.renderer = new WebGLRenderer();

    this.setSizeRender(clientWidth, clientHeight);
    this.addToHTML(container);
  }

  // Configura el tamaño donde se llevará a cabo la escena a renderizar
  setSizeRender(width, height) {
    this.renderer.setSize(width, height);
  }
  // Agrega el canvas al HTML
  addToHTML(container) {
    container.appendChild(this.renderer.domElement);
  }
  // Renderizar
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  // animate
  animate(fn) {
    requestAnimationFrame(() => this.animate(fn));
    fn();
    this.render();
  }
}

export default SCR;
