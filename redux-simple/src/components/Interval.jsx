import "./Interval.css";

import React from "react";

import Card from "./Card";
import { connect } from "react-redux";

const Interval = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} />
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

export default connect(mapStateToProps)(Interval);
