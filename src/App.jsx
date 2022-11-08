import React, { useState } from "react";
import { Button } from "./Button";
import "./App.css";
const App = () => {
  const [result, setResult] = useState("");
  //button value
  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };
  // input clear
  const clear = () => {
    setResult("");
  };
  //backspace one letter
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  return (
    <div className="cantainer">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <Button className="highlight" id="clear" onClick={clear}>
          Clear
        </Button>
        <Button className="highlight" id="backspace" onClick={backspace}>
          C
        </Button>
        <Button name="/" onClick={handleClick}>
          &#xF7;
        </Button>
        <Button name="7" onClick={handleClick}>
          7
        </Button>
        <Button name="8" onClick={handleClick}>
          8
        </Button>
        <Button name="9" onClick={handleClick}>
          9
        </Button>
        <Button name="*" onClick={handleClick}>
          &times;
        </Button>
        <Button name="4" onClick={handleClick}>
          4
        </Button>
        <Button name="5" onClick={handleClick}>
          5
        </Button>
        <Button name="6" onClick={handleClick}>
          6
        </Button>
        <Button name="-" onClick={handleClick}>
          &ndash;
        </Button>
        <Button name="1" onClick={handleClick}>
          1
        </Button>
        <Button name="2" onClick={handleClick}>
          2
        </Button>
        <Button name="3" onClick={handleClick}>
          3
        </Button>

        <Button name="+" onClick={handleClick}>
          +
        </Button>
        <Button name="0" onClick={handleClick}>
          0
        </Button>
        <Button name="." onClick={handleClick}>
          .
        </Button>
        <Button className="highlight" id="result" onClick={handleClick}>
          =
        </Button>
      </div>
    </div>
  );
};
export default App;
