import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const PrizeDraw = (props) => {
  const { min, max } = props;
  const numberDraw = parseInt(Math.random() * (max - min) + min);

  return (
    <Card title="Sorteio de um número" green>
      <div className="PrizeDraw">
        <span>
          <span>Número sorteado: </span>
          <strong>{numberDraw}</strong>
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

export default connect(mapStateToProps)(PrizeDraw);
