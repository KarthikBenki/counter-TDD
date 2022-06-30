import React from "react";
import { useState } from "react";
import "./App.css";


function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div className="App">
        <h1>This is counter App</h1>
        <div id="counter-value">{counter}</div>
        <button id="increment-btn" onClick={()=>setCounter(counter+1)}>Increment</button> 
        <button id="decrement-btn" onClick={()=>setCounter(counter-1)}>Increment</button> 
    </div>
  );
}

export default App;
