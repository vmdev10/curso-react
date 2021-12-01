import React, { useCallback, useState } from "react";

import PageTitle from "../../components/layout/PageTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
  const [counter, setCounter] = useState(0);

//   Dessa forma a função inc vai depender do valor de counter que por sua vez, altera a todo momento
//   Isso faz com sempre que o counter alterar, a função inc é criada NOVAMENTE
//   Logo sempre será passado uma nova função para o React.memo como parâmetro e o componente será renderizado NOVAMENTE 

//   const inc = useCallback(function (delta) {
//     return setCounter(counter + delta);
//   }, [counter]);

// Dessa outra forma o useCallback depende da função setCounter que por sua vez, é criada uma única vez
// Logo o useCallback chamará essa função apeas uma vez, e por consequência a função inc é criada apenas uma vez
// Isso faz com que um única função seja passada como parâmtro para o React.memo e o componente seja renderizado apenas uma vez.
    const inc = useCallback(function(delta) {
        return setCounter((current) => current + delta)
    }, [setCounter])

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />

      <div className="center">
        <span className="text">{counter}</span>

        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
