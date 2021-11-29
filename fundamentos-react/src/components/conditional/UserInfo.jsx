import React from "react";
import If from "./If";

export default (props) => {
  const user = props.user || {}; // Caso a prop 'user' não seja passado o objeto vazio será retornado para não retornar algo de undefined
  return (
    <div>
      <If test={user && user.name}>
        <span>Seja bem vindo(a), {user.name}</span> <br />
      </If>

      <If test={user && user.email}>
        <span>Confirme seu e-mail {user.name}</span>
      </If>

      <If test={!user || !user.name}>
        <span>Seja bem vindo(a) a nossa plataforma</span>
      </If>
    </div>
  );
};
