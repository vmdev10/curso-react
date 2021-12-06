import "./App.css";

import Card from "./components/Card";
import Interval from "./components/Interval";
import Average from "./components/Average";
import Sum from "./components/Sum";
import PrizeDraw from "./components/PrizeDraw";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Average />
        <Sum />
        <PrizeDraw />
      </div>
    </div>
  );
}

export default App;
