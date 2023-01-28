import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

export const configSCR = (container) => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new WebGLRenderer();
  renderer.setSize(width, height);
  container.append(renderer.domElement);

  return {
    scene,
    camera,
    renderer,
  };
};
