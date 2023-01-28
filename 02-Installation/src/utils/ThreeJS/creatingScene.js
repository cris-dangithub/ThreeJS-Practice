import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";

export const createCube = () => {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: "blue" });
  const cube = new Mesh(geometry, material);
  return cube;
};
