import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {

  let [number, setNumber] = useState(0)

  const inCreaseNumber = () => {
      number++
      setNumber(number)
  }

  const resetNumber = () => {
      setNumber(0)
  }

  return (
    <div className="App">
      <Counter number={number}
               inCreaseNumber={inCreaseNumber}
               resetNumber={resetNumber}
      />
    </div>
  );
}

export default App;
