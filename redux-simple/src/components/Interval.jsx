import './Interval.css'

import React from "react";

import Card from "./Card";

const Interval = props => {
  return (
    <Card title="Intervalo de números" red="red">
        <div className="Interval">
          <span>
            <strong>Mínimo:</strong>
            <input type="number" value={0} readOnly />
          </span>

          <span>
            <strong>Máximo:</strong>
            <input type="number" value={10} readOnly />
          </span>
        </div>
      </Card>
  )
}

export default Interval