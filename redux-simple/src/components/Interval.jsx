import "./Interval.css";

import React from "react";

import Card from "./Card";
import { connect } from "react-redux";

import { changeMinNumber, changeMaxNumber } from "../store/actions/numbers";

const Interval = (props) => {
  const { min, max, minNumber, maxNumber } = props;
  console.log(props);

  return (
    <Card title="Intervalo de números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(event) => minNumber(parseInt(event.target.value))}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(event) => maxNumber(+event.target.value)}
          />
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

function mapDispatchToProps(dispatch) {
  return {
    minNumber(newNumber) {
      // Action creator
      const action = changeMinNumber(newNumber);
      dispatch(action);
    },

    maxNumber(newNumber) {
      const action = changeMaxNumber(newNumber);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
