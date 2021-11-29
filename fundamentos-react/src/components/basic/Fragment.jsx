import React from "react";

export default function Fragment(props) {
  return (
    // <React.Fragment>
    //   <h2>{ props.title }</h2>
    //   <p>
    //     <strong>{ props.message }</strong>
    //   </p>
    // </React.Fragment>

    <>
      <h2>{ props.title }</h2>
      <p>
        <strong>{ props.message }</strong>
      </p>
    </>
  )
}