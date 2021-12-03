import React from "react";

import Card from "./Card";

const Sum = props => {
  const { min, max } = props
  return (
    <Card title="Soma dos números" blue>
        <div className="Sum">
          <span>
            <span>Soma: </span>
            <strong>{ min + max }</strong>
          </span>
        </div>
      </Card>
  )
}

export default Sum