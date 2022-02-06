import React, { useState } from "react";
import "./App.css";

function App() {
  //write JS here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter((prev) => prev + 1);
  };
  const toggler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>State using functional component</h1>
      <h1 className={toggle ? "active" : ""}>Hello React</h1>
      <h2>Counter {counter}</h2>

      <button onClick={incrementer}>Counter</button>
      <button onClick={toggler}>Toggle</button>
    </div>
  );
}

export default App;
