import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [stepCount, setStepCount] = useState(1);

  function incCount() {
    setCounter((counter + stepCount));
  }
  function decCount() {
    setCounter(counter - stepCount);
  }
  return (
    <div>
      <h1 style={{ color: "lightgreen" }}>{counter}</h1>
      <div>
        <div>
          <span>Step Count: </span>
          <input
            type="number"
            value={stepCount}
            onChange={(e) => setStepCount(Number(e.target.value))}
          />
        </div>
        <Button type="-" stepCount={stepCount} onChange={decCount} />
        <Button type="+" stepCount={stepCount} onChange={incCount} />
      </div>
    </div>
  );
};

export default Counter;
