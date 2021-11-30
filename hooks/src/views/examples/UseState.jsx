import React, { useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Inicial...')
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{counter}</span>
        <div>
          <button onClick={() => setCounter(counter - 1)} className="btn">
            -1
          </button>
          <button onClick={() => setCounter(counter + 1)} className="btn">
            +1
          </button>
          {/* A função dentro de setCount retorna o valor */}
          <button
            onClick={() => setCounter((current) => current + 1000)}
            className="btn"
          >
            1000
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"/>
      <input onChange={(event) => setName(event.target.value)} type="text" className="input" value={name} />
    </div>
  );
};

export default UseState;
