import React from "react";

import Card from "./Card";

const PrizeDraw = props => {
  const { min, max } = props
  const prizeDrow = parseInt(Math.random() * (max - min)) + min

  return (
    <Card title="Sorteio de um número" green>
        <div className="PrizeDraw">
          <span>
            <span>Número sorteado: </span>
            <strong>{prizeDrow}</strong>
          </span>
        </div>
      </Card>
  )
}

export default PrizeDraw