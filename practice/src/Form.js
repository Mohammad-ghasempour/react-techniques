import React , {useState} from "react";
import "./App.css";
import TimeZoneClocks from "./exercise/timeZoneClocks/TimeZoneClocks";
import { LearnLifeCycles } from "./exercise/lifeCyclesClassComponent/LearnLifeCycles";
import { SearchFilter } from "./exercise/searchFiltr/SearchFilter";
import UseRefPractice from "./exercise/useRefPractice/UseRefPractice";
import Counter from "./exercise/counter/Counter";
import CitiesList from "./exercise/listDisplay/CitiesList";
import AccordionProject from "./exercise/accordion/AccordionProject";
import ImageSlider from "./exercise/imageSlider/ImageSlider";
import CheckBoxForm from "./exercise/checkBox/CheckBoxForm";
import LoginForm from "./exercise/loginForm/LoginForm";
import FormValidationLibrary from "./exercise/formValidationLibrary/FormValidationLibrary";
import FormValidationWithHtmlAndCss from "./exercise/formValidationWithHtmlAndCss/FormValidationWithHtmlAndCss";
import QuoteApi from "./exercise/quoteApi/QuoteApi";
import CurrencyApi from "./exercise/currencyApi/CurrencyApi";
import BackToLanding from "./BackToLanding";
import LandingPage from "./LandingPage";

const ProjectsList = [
  {
    projectId:1,
    projectName:"Time zone clocks",
    description:"In this mini project the time for each zone has been customized",
    content:<><BackToLanding/><TimeZoneClocks/></>
  },
  {
    projectId:2,
    projectName:"Search bar",
    description:"You can search for your subject in the list and show what you expected.",
    content:  <><BackToLanding/><SearchFilter/></>
  }
]
export const Form = () => {

 
  const [currentPageShow, setCurrentPageShow] = useState();

  const showProject= (e)=>{
    setCurrentPageShow(ProjectsList.find((item)=>item.projectId == e.target.id).content);
  }

  const landing = <LandingPage ProjectsList={ProjectsList} showProject={showProject}/>

  return (
    <div className="App">

{/* <LandingPage ProjectsList={ProjectsList} showProject={showProject}/> */}
{!currentPageShow ? landing : currentPageShow}
    
      {/* <TimeZoneClocks/>
       <hr/> */}

      {/* <LearnLifeCycles color={"Red"} />
       <hr/> */}

      {/* <SearchFilter/>
        <hr/> */}

        {/* <UseRefPractice/>
        <hr/> */}

      {/* <Counter/>
        <hr/> */}

      {/* <CitiesList/>
        <hr/> */}

      {/* <AccordionProject/>
        <hr/> */}

      {/* <BackToLanding/>
      <ImageSlider />
      <hr/> */}

      {/* <CheckBoxForm/>
        <hr/> */}

      {/*       
        <LoginForm/>      
        <hr/> */}

      {/* <FormValidationLibrary />
      <hr /> */}

{/* <BackToLanding/>
      <FormValidationWithHtmlAndCss/>
      <hr/> */}
      

      {/* <QuoteApi/>
       <hr/> */}

      {/* <CurrencyApi/>
       <hr/> */}

   
    </div>
  );
};
