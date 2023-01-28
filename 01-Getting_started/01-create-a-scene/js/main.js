import { configSceneCameraRenderer } from "./threeJS/config.js";

// Definicion de la escena, la camara y en renderizador
const { scene, camera, renderer } = configSceneCameraRenderer();

// Agregar el cubo
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 2;

// Renderizar la escena
let speed = 0.01;
const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += speed;
  cube.rotation.y += speed;

  renderer.render(scene, camera);
};
animate();

// Animar el cubo con los botones (yo)
const btnFast = document.querySelector(".btn--fast");
const btnSlow = document.querySelector(".btn--slow");

btnFast.addEventListener("click", (e) => {
  if (speed + 0.01 <= 0.1) speed = Number((speed + 0.01).toFixed(2));
});

btnSlow.addEventListener("click", (e) => {
  const newSpeed = Number((speed - 0.01).toFixed(2));
  if (newSpeed >= 0) speed = newSpeed;
});
