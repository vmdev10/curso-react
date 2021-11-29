import React from "react";

import DirectSon from "./DirectChild";

export default props => {
  return (
    <div>
      <DirectSon name='Ana Vitória' age={19} nerd={false} />
      <DirectSon name='Ana Paula' age={14} nerd={false} />
      <DirectSon name='Ana Júlia' age={2} nerd={false} />
    </div>
  )
}