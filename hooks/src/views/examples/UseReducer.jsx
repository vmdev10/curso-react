import React, { useReducer } from "react";

import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store";
import { add2, login } from "../../store/actions";

const UseReducer = (props) => {
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
          <button className="btn" onClick={() => add2(dispatch)}>
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "multiply7" })}
          >
            x7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "divide25" })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "parseInt" })}
          >
            Int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addN", playload: 10 })}
          >
            +10
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "addN", playload: 15 })}
          >
            +15
          </button>
        </div>
        <button
          className="btn"
          onClick={() => login(dispatch, 'Júlia')}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
