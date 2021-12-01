import React from "react";

const UseCallbackButtons = (props) => {
  console.log('Rensserizando este componente...')

  return (
    <div>
      <button onClick={() => props.inc(6)} className="btn">
        +6
      </button>
      <button onClick={() => props.inc(12)} className="btn">
        +12
      </button>
      <button onClick={() => props.inc(18)} className="btn">
        +18
      </button>
    </div>
  );
};

//  O React.memo vai criar um componente cacheado, de forma que esse componente só seja
// renderizado novamente caso as propriedades que forem passadas para ele mudem. 
export default React.memo(UseCallbackButtons)