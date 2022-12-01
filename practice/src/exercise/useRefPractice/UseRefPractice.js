import React, { useRef, useState, useEffect } from "react";

const UseRefPractice = () => {
  const [count, setCount] = useState("");
  const ref = useRef(0);

  useEffect(() => {
    ref.current = ref.current + 1;
  });
  useEffect(() => {
    ref.current = 1;
  }, []);

  const myFocus = useRef();
  const focusOnInput = ()=>{
    myFocus.current.focus();

  }
  /////////Current State and Previous state////////
  const [myText, setMyText] = useState("");
  const previousState = useRef("");
  
  const formSubmit =(e)=>{
    e.preventDefault()
    console.log(e.target[0].value)
    setMyText(e.target[0].value)
    }

    useEffect(()=>{
        previousState.current = myText
    },[myText])



  return (
    <div>
      <span>Enter a Text: </span><input
        type="text"
        ref={myFocus}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <p>the count of render is: {ref.current}</p>
      <button onClick={focusOnInput}>Focus on Input</button>
      
      <hr/>
      <form onSubmit={formSubmit}>
      <span>Enter a Name: </span><input type="text" name="TextInput"  />
      <p>Current name is: <b> {myText} </b></p>
      <p>Previous name was:<b> {previousState.current}</b></p>
      </form>
    </div>
  );
};

export default UseRefPractice;
