import React from "react";
import style from "./CSS/display.module.css";
import image from "./icon/github-logo.png"

const QuoteDisplay = (props) => {
  return (
    <div className={style.container}>
      <div className={style.quoteBox}>
        <div> {props.content} </div>
        <div>
          <span>
            <b>{props.author}</b>
          </span>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <span>
            <img src={image}/>
          </span>
          <span>
            <button onClick={props.newQuote}>New quote</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
