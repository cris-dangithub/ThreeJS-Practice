import { useEffect, useState } from "react";
import "./App.css";
import { configSCR } from "./utils/ThreeJS/config";
import { createCube } from "./utils/ThreeJS/creatingScene";

function App() {
  const [sceneTHREE, setSceneTHREE] = useState();
  const [cameraTHREE, setCameraTHREE] = useState();
  const [rendererTHREE, setRendererTHREE] = useState();
  const [cubeTHREE, setCubeTHREE] = useState();
  const [requestID, setRequestID] = useState();
  const [speed, setSpeed] = useState(0.01);
  const handlePlus = () => {
    setSpeed(speed + 0.01);
  };
  const handleMinus = () => {
    setSpeed(speed - 0.01);
  };

  const animate = () => {
    setRequestID(requestAnimationFrame(animate));
    cubeTHREE.rotation.x += speed;
    cubeTHREE.rotation.y += speed;
    rendererTHREE.render(sceneTHREE, cameraTHREE);
  };

  useEffect(() => {
    const container = document.querySelector(".container");
    const { scene, camera, renderer } = configSCR(container);
    const cube = createCube();
    setSceneTHREE(scene);
    setCameraTHREE(camera);
    setRendererTHREE(renderer);
    setCubeTHREE(cube);
  }, []);
  useEffect(() => {
    if (sceneTHREE && cameraTHREE && rendererTHREE && cubeTHREE) {
      sceneTHREE.add(cubeTHREE);
      cameraTHREE.position.z = 3;
      animate();
    }
  }, [cubeTHREE]);
  useEffect(() => {
    if (sceneTHREE && cameraTHREE && rendererTHREE && cubeTHREE) {
      cancelAnimationFrame(requestID);
      animate();
    }
  }, [speed]);
  return (
    <div className="App">
      <div className="container"></div>
      <button onClick={handlePlus}>Más rápido</button>
      <button onClick={handleMinus}>Más lento</button>
    </div>
  );
}

export default App;
