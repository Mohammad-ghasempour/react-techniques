import React, { useState, useEffect ,createContext, useContext} from "react";
import {userNameContext} from './Form';


const Hooks = () => {
    const myUserName = useContext(userNameContext);


  const [car, setCar] = useState({
    brand: "Benz",
    model: "X4",
    year: "2022",
    color: "black",
  });
  const [count, setCount] = useState(0);
  const [calculate, setCalculate] = useState(0);
  const [plustime , setPlustime] = useState(0);
 

  useEffect(() => {
    setCalculate( count * 2)
    console.log('the context value is:' + myUserName)
    
  },[count]);

  useEffect(()=>{
    let timer = setTimeout(()=>{
        setPlustime(plustime +1);
    },2000);

    return ()=>{ clearTimeout(timer) };
})

  const changeFunc = (e) => {
    setCar((prevState) => {
      return { prevState, brand: e.target.value };
    });
  };

  return (
    <>
      <div>Hooks</div>
      <div>
        <select onChange={changeFunc}>
          <option value=""></option>
          <option value="Volvo">Volvo</option>
          <option value="Samand">Samand</option>
          <option value="Mazda">Mazda</option>
        </select>
      </div>
      <hr />
      <p>
        our car is a <b>{car.brand}</b> {car.model}. we have bought it on{" "}
        {car.year} and its color is {car.color} <br />
      </p>
      <br/>
      <h2>the timer should stop:</h2><p>{plustime}</p>
      <h4>counter: {count}</h4>
      <button onClick={()=> setCount(count +1)}>*</button>
      <h4>multiple *2: {calculate}</h4>
    </>
  );
};

export default Hooks;
