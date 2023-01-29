import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

const useConfigInitialTHREE = (container) => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  const sceneTHREE = new Scene();
  const cameraTHREE = new PerspectiveCamera(45, width / height, 1, 10000);
  cameraTHREE.position.set(0, 0, 500);
  cameraTHREE.lookAt(0, 100, 0);
  const rendererTHREE = new WebGLRenderer();
  rendererTHREE.setSize(width, height);
  const canvas = rendererTHREE.domElement;
  console.log(container.children.length);
  //Si no pongo lo siguiente, se me renderizará dos veces, asi que debo eliminar ese primer renderizado
  container.innerHTML = "";
  container.append(canvas);
  return {
    sceneTHREE,
    cameraTHREE,
    rendererTHREE,
  };
};

export default useConfigInitialTHREE;
