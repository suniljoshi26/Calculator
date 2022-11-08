import React from "react";

export const Button = ({ children, onclick }) => {
  return <button onClick={onclick}>{children} </button>;
};
