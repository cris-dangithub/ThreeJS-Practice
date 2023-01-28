export const configSceneCameraRenderer = () => {
  const box = document.querySelector(".box-container");
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    box.clientWidth / box.clientHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(box.clientWidth, box.clientHeight);
  box.append(renderer.domElement);

  return {
    scene,
    camera,
    renderer,
  };
};
