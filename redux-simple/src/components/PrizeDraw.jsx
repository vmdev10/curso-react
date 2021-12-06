import React from "react";

import Card from "./Card";

const PrizeDraw = (props) => {
  return (
    <Card title="Sorteio de um número" green>
      <div className="PrizeDraw">
        <span>
          <span>Número sorteado: </span>
          <strong>8</strong>
        </span>
      </div>
    </Card>
  );
};

export default PrizeDraw;
