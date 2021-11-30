import React from "react";
import { useParams } from 'react-router-dom'

const Home = (props) => {
  const { id } = useParams()
  return (
    <div className="Home">
      <h1>Param</h1>
      <h2>Valor do id: { id } </h2>
    </div>
  );
};

export default Home;
