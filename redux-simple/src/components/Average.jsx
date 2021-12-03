import React from "react";

import Card from "./Card";

const Average = props => {
  const { min, max } = props
  return (
    <Card title="Média dos números" purple>
        <div className="Average">
          <span>
            <span>Média: </span>
            <strong>{ (min + max) / 2}</strong>
          </span>
        </div>
      </Card>
  )
}

export default Average