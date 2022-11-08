import React, { useState } from "react";
import { Button } from "./Button";
import "./App.css";
const App = () => {
  const [result, setResult] = useState("hi");
  const handleClick = () => {};
  return (
    <div className="cantainer">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <Button onClick={handleClick}>Clear</Button>
        <Button onClick={handleClick}>C</Button>
        <Button onClick={handleClick}>&#xF7;</Button>
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick}>&times;</Button>
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick}>&ndash;</Button>
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button> <Button>1</Button>
        <Button onClick={handleClick}>+</Button>
        <Button onClick={handleClick}>0</Button>
        <Button onClick={handleClick}>.</Button>
        <Button onClick={handleClick}>=</Button>
      </div>
    </div>
  );
};
export default App;
