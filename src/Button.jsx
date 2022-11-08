import React from "react";
import "./Button.css";
export const Button = ({ children, onClick, name, id }) => {
  return (
    <button onClick={onClick} name={name} id={id}>
      {children}{" "}
    </button>
  );
};
