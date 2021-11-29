import React from "react"; 

export default props => {
  const cb = props.whenToClick
  const generateAge = () => parseInt(Math.random() * (20)) + 10 
  const generateNerd = () => Math.random() > 0.5

  return (
    <div>
      <div>
      <span>
        Filho
      </span>
      </div>
      <button onClick={_ => cb('Ana', generateAge, generateNerd)}>Fornecer informações</button>
    </div>
  )
}