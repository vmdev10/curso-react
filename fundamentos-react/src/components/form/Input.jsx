import React, { useState } from "react";

export default (props) => {
  const [value, setValue] = useState("Digite...");

  function whenToChange(event) {
    // console.log(event.target.value)

    setValue(event.target.value)
  }

  return (
    <div>
      <input type="text" value={value} onChange={whenToChange}/>
      <input type="text" value={value} readOnly/>
      <input type="text" value={undefined} readOnly/>
    </div>
  );
};
