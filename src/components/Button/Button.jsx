import React from "react";
import "./btn.scss";

export const Button = (props) => {
  return (
    <button {...props} className={`btn ${props.className}`}>{props.title}</button>
  )
}
