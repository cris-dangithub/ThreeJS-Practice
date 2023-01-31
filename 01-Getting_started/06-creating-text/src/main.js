import SRC from './utils/configTHREE';
import Cube from './utils/cube';

const container = document.querySelector('.container');

const threeConfig = new SRC(container, { fov: 100, near: 0.3 });

// definir geometria
const cube = new Cube();

threeConfig.scene.add(cube.cube);
threeConfig.camera.position.z = 2;

threeConfig.animate(() => cube.rotateCube(cube.cube));

//!!--------------------------------------- CSS2DRender (para texto)

// EJEMPLO ACA: https://threejs.org/examples/#css2d_label
// REPO DEL EJEMPLO: https://github.com/mrdoob/three.js/blob/master/examples/css2d_label.html
// REPO DE CSS2DRENDER: https://github.com/mrdoob/three.js/blob/master/examples/jsm/renderers/CSS2DRenderer.js

//!!--------------------------------------- CSS3DRender

// DOCS: https://threejs.org/docs/index.html#examples/en/renderers/CSS3DRenderer
// REPO DE CSS3DRENDER: https://github.com/mrdoob/three.js/blob/master/examples/jsm/renderers/CSS3DRenderer.js
