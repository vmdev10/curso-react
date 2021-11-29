import React from "react";

export default function Random(props) {
  const randomNumber = Math.floor(Math.random() * (props.max  - props.min + 1) ) + props.min
  return (
    <div>
      <h2>O valor escolhido aleatóriamente foi: </h2>
        <p><strong> { randomNumber }</strong></p>
    </div>
  )
}