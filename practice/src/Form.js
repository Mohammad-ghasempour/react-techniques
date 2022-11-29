import React, { createContext, useContext, useState } from "react";
import "./App.css";
import Clock from "./Clock";
import { LearnLifeCycles } from "./LearnLifeCycles";
import Hooks from "./Hooks";
import { SearchFilter } from "./exercise/searchFiltr/SearchFilter";
import UseRefPractice from "./UseRefPractice";
import Counter from "./exercise/counter/Counter";
import CitiesList from "./exercise/listDisplay/CitiesList";
import AccordionProject from "./exercise/accordion/AccordionProject";
import ImageSlider from "./exercise/imageSlider/ImageSlider";
import CheckBoxForm from "./exercise/checkBox/CheckBoxForm";
import JustForPractice from "./JustForPractice";
import LoginForm from "./exercise/loginForm/LoginForm";
import FormValidationLibrary from "./exercise/formValidationLibrary/FormValidationLibrary";
import FormValidationWithHtmlAndCss from "./exercise/formValidationWithHtmlAndCss/FormValidationWithHtmlAndCss";
import QuoteApi from "./exercise/quoteApi/QuoteApi";
import CurrencyApi from "./exercise/currencyApi/CurrencyApi";

export const userNameContext = createContext();

export const Form = () => {
  const [userName, setUserName] = useState("Mohammad");
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

      {/* <CitiesList/>
        <hr/> */}

      {/* <AccordionProject/>
        <hr/> */}

      {/* <ImageSlider />
      <hr/> */}

      {/* <CheckBoxForm/>
        <hr/> */}

      {/*       
        <LoginForm/>      
        <hr/> */}

      {/* <FormValidationLibrary />
      <hr /> */}

      {/* <FormValidationWithHtmlAndCss/>
      <hr/>
       */}

       {/* <QuoteApi/>
       <hr/> */}

       <CurrencyApi/>


      {/* <JustForPractice/> */}
    </div>
  );
};
