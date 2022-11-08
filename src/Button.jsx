import React from "react";
import "./Button.css";
export const Button = ({ children, onClick, name, id, className }) => {
  return (
    <button onClick={onClick} name={name} id={id} className={className}>
      {children}{" "}
    </button>
  );
};
