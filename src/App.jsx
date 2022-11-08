import React from "react";
import { Button } from "./Button";
import "./App.css";
const App = () => {
  return (
    <div className="cantainer">
      <form>
        <input type="text" value="2" />
      </form>
      <div className="keypad">
        <Button>Clear</Button>
        <Button>C</Button>
        <Button>&#xF7;</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>&times;</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>&ndash;</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button> <Button>1</Button>
        <Button>+</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
      </div>
    </div>
  );
};
export default App;
