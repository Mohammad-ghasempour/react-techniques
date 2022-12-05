import React, { useState } from "react";
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
    projectId: 1,
    projectName: "Time zone clocks",
    description:
      "In this mini project the time for each zone has been customized",
    content: (
      <>
        <BackToLanding />
        <TimeZoneClocks />
      </>
    ),
  },
  {
    projectId: 2,
    projectName: "Search bar",
    description:
      "You can search for your subject in the list and show what you expected.",
    content: (
      <>
        <BackToLanding />
        <SearchFilter />
      </>
    ),
  },
  {
    projectId: 3,
    projectName: "A counter",
    description:
      "Specify steps for counter and increase or decrease score number.",
    content: (
      <>
        <BackToLanding />
        <Counter />
      </>
    ),
  },
  {
    projectId: 4,
    projectName: "List of cities",
    description: "Separatign list of cities by its number of length.",
    content: (
      <>
        <BackToLanding />
        <CitiesList />
      </>
    ),
  },
  {
    projectId: 5,
    projectName: "Accordion",
    description: "An accordion to preserve text data.",
    content: (
      <>
        <BackToLanding />
        <AccordionProject />
      </>
    ),
  },
  {
    projectId: 6,
    projectName: "Image slider",
    description: "An image slider that navigate between ten images.",
    content: (
      <>
        <BackToLanding />
        <ImageSlider />
      </>
    ),
  },
  {
    projectId: 7,
    projectName: "Residence permit validator",
    description:
      "This form could validate a person regarding their living condition and provide a description about them. if the person is eligible to live in Norway, officer can add them to Database!",
    content: (
      <>
        <BackToLanding />
        <CheckBoxForm />
      </>
    ),
  },
  {
    projectId: 8,
    projectName: "login register form",
    description: "An image slider that navigate between ten images.",
    content: (
      <>
        <BackToLanding />
        <LoginForm />
      </>
    ),
  },
  {
    projectId: 9,
    projectName: "Form validation library",
    description: "This form validation build with React-Hook-Form.",
    content: (
      <>
        <BackToLanding />
        <FormValidationLibrary />
      </>
    ),
  },
  {
    projectId: 10,
    projectName: "Form validation",
    description:
      "A form validation which build with HTML , CSS and Javascript. No library and any complexity javascript functions!",
    content: (
      <>
        <BackToLanding />
        <FormValidationWithHtmlAndCss />
      </>
    ),
  },
  {
    projectId: 11,
    projectName: "Random Quotes",
    description:
      "An application to give us many quotes which you can specify how long length of quote would you like to get.",
    content: (
      <>
        <BackToLanding />
        <QuoteApi />
      </>
    ),
  },
  {
    projectId: 12,
    projectName: "Currency convertor",
    description:
      "You can covert currencies from all over the world in this application. the point is that this app just accept a limit request per month!",
    content: (
      <>
        <BackToLanding />
        <CurrencyApi />
      </>
    ),
  },
  {
    projectId: 13,
    projectName: "How to use useRef hook",
    description:
      "This mini project show us how to use useRef hook to keep the previous state.",
    content: (
      <>
        <BackToLanding />
        <UseRefPractice />
      </>
    ),
  },
  {
    projectId: 14,
    projectName: "React class component life sycles",
    description:
      "we used all lifecycle methods that can use in a class component.",
    content: (
      <>
        <BackToLanding />
        <LearnLifeCycles color={"Red"} />
      </>
    ),
  },
];
export const Form = () => {
  const [currentPageShow, setCurrentPageShow] = useState();

  const showProject = (e) => {
    setCurrentPageShow(
      ProjectsList.find((item) => item.projectId == e.target.id).content
    );
  };

  const landing = (
    <LandingPage ProjectsList={ProjectsList} showProject={showProject} />
  );

  return (
    <div className="App">{!currentPageShow ? landing : currentPageShow}</div>
  );
};
