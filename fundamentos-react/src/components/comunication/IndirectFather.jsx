import React, { useState } from "react"; 
import IndirectChild from "./IndirectChild";

export default props => {
  const [name, setName] = useState('?')
  const [age, setAge] = useState(0)
  const [nerd, setNerd] = useState('')


  function setInformations(name, age, nerd) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{ name }, { age } - { nerd ? 'Verdadeiro' : 'Falso'}</span>
      </div>
        <IndirectChild whenToClick={setInformations}/>
    </div>
  )
}