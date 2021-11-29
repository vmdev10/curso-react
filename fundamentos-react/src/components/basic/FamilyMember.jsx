import React from "react";

export default props => {
  return (
    <div>
      { props.firstName } <strong>{ props.lastName }</strong>
    </div>
  )
}