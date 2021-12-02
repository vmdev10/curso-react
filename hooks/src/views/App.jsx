import "./App.css";

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import DataContext, { data } from "../data/DataContext";
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

const App = (props) => {
  const [state, setState] = useState(data)

  return (
    // Envolvendo o meu contexto no componente raiz da minha aplicação (App), que engloba todos os dutros componentes
    // Como valor do meu contexto estou passando um objeto que contém o meu state e o meu setState
    <DataContext.Provider value={{state, setState}}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContext.Provider>
  );
};

export default App;
