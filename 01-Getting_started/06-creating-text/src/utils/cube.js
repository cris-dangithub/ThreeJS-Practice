import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

class Cube {
  constructor() {
    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 'red' });
    this.cube = new Mesh(geometry, material);
  }
  rotateCube(cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
  rotateXCube(cube) {
    cube.rotation.x += 0.01;
  }
}

export default Cube;
