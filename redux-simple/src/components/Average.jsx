import React from "react";

// Responsável por CONECTAR o componente ao estado global da aplicação
import { connect } from "react-redux";

import Card from "./Card";

const Average = (props) => {
  // console.log(props.numbers);
  const { min, max } = props;
  return (
    <Card title="Média dos números" purple>
      <div className="Average">
        <span>
          <span>Média: </span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

// Mapeando o meu estado global da minha aplicação (consigo acessar qualquer dado de lá) e passando para minhas props
function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

// Conectando o estado às props
export default connect(mapStateToProps)(Average);
