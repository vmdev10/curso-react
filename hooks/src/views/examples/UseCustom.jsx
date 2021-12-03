import React from "react";

import PageTitle from "../../components/layout/PageTitle";
import { useCounter } from "../../hooks/useCounter";
import SectionTitle from "../../components/layout/SectionTitle";
import { useFetch } from "../../hooks/useFetch";

const UseCustom = (props) => {
  const [count, inc, dec] = useCounter(10);

  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const [response] = useFetch(url);

  console.log(response.data);

  function showStates(states) {
      return states.map((state) => (
      <li key={state.nome}>
        {state.sigla} - {state.nome}
      </li>
    ));
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>

        <div>
          <button onClick={() => dec(count - 1)} className="btn">
            -1
          </button>
          <button onClick={() => inc(count + 1)} className="btn">
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <ul>{response.data ? showStates(response.data) : false}</ul>
      </div>
    </div>
  );
};

export default UseCustom;
