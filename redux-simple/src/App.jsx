import "./App.css";

import Card from "./components/Card";
import Interval from "./components/Interval";
import Average from "./components/Average";
import Sum from "./components/Sum";
import PrizeDraw from "./components/PrizeDraw";
import { useState } from "react";

function App() {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)

  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className="linha">
        <Interval min={min} max={max} updateMin={setMin} updateMax={setMax}/>
      </div>
      <div className="linha">
        <Average min={min} max={max}/>
        <Sum min={min} max={max}/>
        <PrizeDraw min={min} max={max}/>
      </div>
    </div>
  );
}

export default App;
