import React, { cloneElement } from "react";

export default (props) => {
  return (
    // Para vários
    // <div>
    //   <FamilyMember firstName="Ana" lastName={props.lastName}/>
    //   <FamilyMember firstName="Júlia" {...props}/>
    //   <FamilyMember firstName="Paula" />
    // </div>

    // Para um elemento só
    // <div>
    //  {cloneElement(props.children, props)}
    // </div>

    <div>
      {
        props.children.map((child, index) => {
          return cloneElement(child, { ...props, key: index });
        })

        // React.Children.map(props.children, (child, index) => {
        // return cloneElement(child, { ...props, key: index })
        // })
      }
    </div>
  );
};
