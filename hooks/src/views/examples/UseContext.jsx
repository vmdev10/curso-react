import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import DataContext from "../../data/DataContext";

const UseContext = (props) => {
  // O context está recebendo o meu objeto de contexto e retornando o valor atual
  const context = useContext(DataContext);

  function setNumber(delta) {
    return context.setState({
      ...context.state,
      number: context.state.number + delta,
    });
  }

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />

      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>

        <div>
          <button className="btn" onClick={() => setNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(+1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
