import React, { useEffect, useState } from "react";
import useConfigInitialTHREE from "../hooks/useConfigInitialTHREE";
import "./styles/LineTHREEJS.css";
import useLineTHREE from "./../hooks/useLineTHREE";

const LineTHREEJS = ({ speed }) => {
  const [scene, setScene] = useState();
  const [camera, setCamera] = useState();
  const [renderer, setRenderer] = useState();
  const [line, setLine] = useState();
  //!const [requestID, setRequestID] = useState();
  let requestID;
  const animate = () => {
    //!setRequestID(requestAnimationFrame(animate));
    requestID = requestAnimationFrame(animate)
    line.rotation.y += speed;
    renderer.render(scene, camera);
  };

  useEffect(() => {
    const container = document.querySelector(".c-LineTHREEJS");
    const { sceneTHREE, cameraTHREE, rendererTHREE } =
      useConfigInitialTHREE(container);
    setScene(sceneTHREE);
    setCamera(cameraTHREE);
    setRenderer(rendererTHREE);
    setLine(useLineTHREE());
  }, []);
  useEffect(() => {
    if (line) {
      scene.add(line);
      renderer.render(scene, camera);
      animate();
    }
  }, [line]);

  useEffect(() => {
    if (line) {
      // Esto es importante para poder vovler a ejecutar la animación con los nuevos valores
      cancelAnimationFrame(requestID);
      animate();
    }
  }, [speed]);

  return <div className="c-LineTHREEJS"></div>;
};

export default LineTHREEJS;
