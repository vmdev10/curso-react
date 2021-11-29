import './EvenOrOdd.css'

import values from "../../data/Values";

import React from "react";

export default () => {
  const value = values.map((value, id) => {
    const evenValue = value % 2 === 0;
    return (
      <li key={id}>
        <span>{value}</span>
        <span>{evenValue ? "Par" : "Ímpar"}</span>
      </li>
    );
  });

  return (
    <div className="ValuesList">
      <header>
        <h3>Número</h3>
        <h3>Classificação</h3>
      </header>
      <ul>
        { value }
      </ul>
    </div>
  );
};
