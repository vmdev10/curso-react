import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const UseReducer = (props) => {
  const initialState = {
    cart: [],
    products: [],
    user: null,
    // Foco...
    number: 0,
  };

  // A partir da 'action'(ação) que foi gerada, eu sei como vou atualizar o meu estado(state) para o novo estado da aplicação
  // Toda ação tem um tipo, que é onde saberei onde vou alterar o meu estado
  function reducer(state, action) {
    switch (action.type) {
      case "add2Number":
        return {
          ...state,
          number: state.number + 2,
        };

      case "login":
        return {
          ...state,
          user: { name: action.payload},
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        <span className="text">{state.number}</span>
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Nenhum usuário logado</span>
        )}
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "add2Number" })}
          >
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "login", payload: 'Júlia' })}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
