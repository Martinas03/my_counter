import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";

function App() {

  let [value, setValue] = useState(0)

  const inCreaseNumber = () => {
      value++
      setValue(value)
  }

  const resetNumber = () => {
      setValue(0)
  }

  return (
    <div className="App">
      <Counter number={value}
               inCreaseNumber={inCreaseNumber}
               resetNumber={resetNumber}
               setValue={setValue}
      />
    </div>
  );
}

export default App;
