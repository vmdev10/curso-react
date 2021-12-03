import React from "react";

import './Card.css'

function selectColor(props) {
  if(props.red) return 'Red'
  if(props.green) return 'Green'
  if(props.blue) return 'Blue'
  if(props.purple) return 'Purple'
  return ""
}

const Card = props => {
  return (
    <div className={`Card ${selectColor(props)}`}>
      <header className="Header">
        <span className="Title">{props.title}</span>
      </header>
      <body className="Content">
        {props.children}
      </body>
    </div>
  )
}

export default Card