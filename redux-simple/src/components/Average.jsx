import React from "react";

import Card from "./Card";

const Average = (props) => {
  return (
    <Card title="Média dos números" purple>
      <div className="Average">
        <span>
          <span>Média: </span>
          <strong>5</strong>
        </span>
      </div>
    </Card>
  );
};

export default Average;
