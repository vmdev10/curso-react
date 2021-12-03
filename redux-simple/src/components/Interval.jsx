import './Interval.css'

import React from "react";

import Card from "./Card";

const Interval = props => {
  const { min, max, updateMin, updateMax } = props
  return (
    <Card title="Intervalo de números" red>
        <div className="Interval">
          <span>
            <strong>Mínimo:</strong>
            <input type="number" value={min} onChange={(event) => updateMin(+event.target.value)} />
          </span>

          <span>
            <strong>Máximo:</strong>
            <input type="number" value={max} onChange={(event) => updateMax(+event.target.value)} />
          </span>
        </div>
      </Card>
  )
}

export default Interval