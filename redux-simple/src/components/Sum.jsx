import React from "react";

import Card from "./Card";

const Sum = (props) => {
  return (
    <Card title="Soma dos números" blue>
      <div className="Sum">
        <span>
          <span>Soma: </span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
};

export default Sum;
