import React, { useEffect, useRef, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const counter = useRef(0);

  // Fazendo uma referência ao meu elemento input como valor da propriedade current, dentro do objeto retornado por useRef
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  console.log(myInput1.current);

  useEffect(
    function () {
      counter.current++;
      myInput2.current.focus()
    },
    [value1]
  );

  useEffect(
    function () {
      counter.current = counter.current + 1;
      myInput1.current.focus()
    },
    [value2]
  );

  console.log(counter.current);
  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{value1}</span>
          <span className="text red">[{counter.current}]</span>
        </div>
        <input
          ref={myInput1}
          onChange={(event) => setValue1(event.target.value)}
          type="text"
          className="input"
          value={value1}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          ref={myInput2}
          onChange={(event) => setValue2(event.target.value)}
          type="text"
          className="input"
          value={value2}
        />
      </div>
    </div>
  );
};

export default UseRef;
