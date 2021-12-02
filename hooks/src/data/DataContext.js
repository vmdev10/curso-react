import React from "react";

// Conjunto de dados..
export const data = {
  number: 123,
  text: "Context API...",
};

// Criando um contexto...
const DataContext = React.createContext(data);

export default DataContext;
