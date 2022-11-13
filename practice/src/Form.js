import React, { createContext, useContext, useState } from "react";
import "./App.css";
import Clock from "./Clock";
import { LearnLifeCycles } from "./LearnLifeCycles";
import Hooks from "./Hooks";
import {SearchFilter} from './exercise/searchFiltr/SearchFilter';
import UseRefPractice from './UseRefPractice';
import Counter from "./exercise/counter/Counter";
import CitiesList from "./exercise/listDisplay/CitiesList";

export const userNameContext = createContext();


export const Form = () => {
    const [userName , setUserName] = useState('Mohammad')
  return (
    <div className="App">
      {/* <div> Learn React </div>
      <div>
      <br />
      <hr />
      <Clock city={"Tehran"} />
      <Clock city={"Stavanger"} />
      <Clock city={"NewYork"} />
    

      <LearnLifeCycles color={"Red"} />
      <br />
      <userNameContext.Provider value={userName}>
      <Hooks />
      </userNameContext.Provider>
      </div> */}
      
        {/* <SearchFilter/>

        <hr/>

        <UseRefPractice/>
        <hr/> */}
        {/* <Counter/>
        <hr/> */}

        <CitiesList/>

    </div>
  );
};
