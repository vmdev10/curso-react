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
      case "add2":
        return {
          ...state,
          number: state.number + 2,
        };

      case "multiply7":
        return {
          ...state,
          number: state.number * 7,
        };

      case "divide25":
        return {
          ...state,
          number: state.number / 25,
        };

      case "parseInt":
        return {
          ...state,
          number: parseInt(state.number),
        };
      case "addN":
        return {
          ...state,
          number: state.number + action.playload,
        };

      case "login":
        return {
          ...state,
          user: { name: action.payload },
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
          <button className="btn" onClick={() => dispatch({ type: "add2" })}>
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "multiply7" })}
          >
            x7
          </button>
          <button className="btn" onClick={() => dispatch({ type: "divide25" })}>
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "parseInt" })}
          >
            Int
          </button>
          <button className="btn" onClick={() => dispatch({type: 'addN', playload: 10})}>+10</button>
          <button className="btn" onClick={() => dispatch({type: 'addN', playload: 15})}>+15</button>

        </div>
        <button
          className="btn"
          onClick={() => dispatch({ type: "login", payload: "Júlia" })}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
