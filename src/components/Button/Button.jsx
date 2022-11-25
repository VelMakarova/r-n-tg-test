import React from "react";

export const Button = (props) => {
  return (
    <button {...props} className={`btn ${props.class}`}></button>
  )
}
