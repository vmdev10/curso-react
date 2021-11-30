import React, { useEffect, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState('Ímpar');

  function calcFatorial(value) {
    const number = parseInt(value);
    if (number < 0) return -1;
    if (number === 0) return 1;
    return calcFatorial(number - 1) * number;
  }

  function calcStatus(value) {
      const number = parseInt(value)
      if(number === 0) return 'Neutro'
      if(number % 2 === 0) return 'Par'
      return 'Ímpar'
  }


  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
      function () {
        setStatus(calcStatus(number))
      },
    //   Se o array de depências estiver vazio, isso quer dizer que a função será executada sempre
    // E não apenas quando a depedência for alterado 
      [number]
  )

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial}</span>
        </div>
        <input
          onChange={(event) => setNumber(event.target.value)}
          type="number"
          className="input"
          value={number}
        />
      </div>
      <SectionTitle title="Exercício #02" />

      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
