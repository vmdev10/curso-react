import "./App.css";

import Card from "./components/Card";
import Interval from "./components/Interval";

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux (simples)</h1>
      <div className="linha">
        <Interval />
      </div>
      <div className="linha">
        <Card title="Card 2" blue="blue">
          Y
        </Card>
        <Card title="Card 2" green="green">
          Y
        </Card>
      </div>
    </div>
  );
}

export default App;
