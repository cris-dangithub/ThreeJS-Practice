import React from "react";
import { BufferGeometry, Line, LineBasicMaterial, Vector3 } from "three";

const useLineTHREE = () => {
  // Crear la geometría. Primero crearemos unos puntos para luego usar un setFromPoints
  const points = [];
  const radious = 50; // en cm
  let angle = Math.PI; // rad
  const separation = 50; // en cm
  for (let i = 0; i < 50; i++) {
    const x = Math.cos(angle) * radious;
    const z = Math.sin(angle) * radious;
    const y = (angle * separation) / (2 * Math.PI);
    points.push(new Vector3(x, y, z));
    angle += Math.PI / 5;
  }
  const geometry = new BufferGeometry().setFromPoints(points);
  // Creación del material
  const material = new LineBasicMaterial({ color: 0x0000ff });
  // Creación de la linea juntando la geometría y el material
  const line = new Line(geometry, material);
  return line;
};

export default useLineTHREE;
