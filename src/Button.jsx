import React from "react";

export const Button = ({ children, onClick, name }) => {
  return (
    <button onClick={onClick} name={name}>
      {children}{" "}
    </button>
  );
};
