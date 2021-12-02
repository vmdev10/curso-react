import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: 'Context API + Hooks...'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)

  function updateState(key, newValue) {
    setState({
      ...state,
      [key]: newValue
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      // FUnções que alteram elementos do meu estado individualmente
      setNumber: n => updateState('number', n),
      setText: t => updateState('text', t)
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default Store