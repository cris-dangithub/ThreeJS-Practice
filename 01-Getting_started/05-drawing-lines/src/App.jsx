import "./App.css";
import LineTHREEJS from "./components/LineTHREEJS";
import { useState } from "react";

function App() {
  const [speed, setSpeed] = useState(0.01);
  const handleClick = () => {
    setSpeed(speed + 0.01);
  };
  //console.log(lastLinePositionX)
  return (
    <div className="App">
      <LineTHREEJS speed={speed} />
      <button onClick={handleClick}>Mover linea</button>
    </div>
  );
}

export default App;
