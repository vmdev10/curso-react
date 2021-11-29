import "./App.css";

import First from "./basic/First";
import WithParams from "./basic/WithParams";
import Fragment from "./basic/Fragment";
import Random from "./basic/Random";
import Card from "./layout/Card";
import Family from "./basic/Family";
import FamilyMember from "./basic/FamilyMember";
import StudentsList from "./repetition/StudentsList";
import ProductsList from "./repetition/ProductsList";
import EvenOrOdd from "./conditional/EvenOrOdd";
import UserInfo from "./conditional/UserInfo";
import DirectFather from "./comunication/DirectFather";
import IndirectFather from "./comunication/IndirectFather";
import Input from "./form/Input";

import React from "react";

export default () => (
  <div className="App">
    <div className="Cards">
      <Card title="#12 - Formulários controlados" color="#f72585">
        <Input />
      </Card>

      <Card title="#11 - Comunicação idireta" color="#f72585">
        <IndirectFather />
      </Card>

      <Card title="#10 - Comunicação direta" color="#f72585">
        <DirectFather />
      </Card>

      <Card title="#09 - Renderização Condicional 02" color="#f72585">
        <UserInfo user={{ name: "Ana Vitória", email: "ana@reactdev.com" }} />
        <UserInfo user={{}} />
        <UserInfo />
      </Card>

      <Card title="#08 - Renderização Condicional 01" color="#7209b7">
        <EvenOrOdd />
      </Card>

      <Card title="#07 - Desafio Repetição" color="#2a9d8f">
        <ProductsList />
      </Card>

      <Card title="#06 - Repetição" color="#F4B9B2">
        <StudentsList />
      </Card>

      <Card title="#05 - Componentes com filhos" color="#7DBBC3">
        <Family lastName="Moura">
          <FamilyMember firstName="Ana" />
          <FamilyMember firstName="Júlia" />
          <FamilyMember firstName="Paula" />
        </Family>
      </Card>

      <Card title="#04 - Desafio Aleatório" color="#D7263D">
        <Random max={10} min={1} />
      </Card>

      <Card title="#03 - Fragmento" color="#1B998B">
        <Fragment title="Fragmento" message="Cuidado com esse erro!" />
      </Card>

      <Card title="#02 - Com Parâmetros" color="#F46036">
        <WithParams
          title="Situação do aluno"
          student="Ana Vitória"
          grade={9.3}
        />
      </Card>

      <Card title="#01 - Primeiro Componente" color="#2E294E">
        <First />
      </Card>
    </div>
  </div>
);
