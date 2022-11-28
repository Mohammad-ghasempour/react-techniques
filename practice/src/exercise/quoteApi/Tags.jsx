import React from "react";
import style from "./CSS/tags.module.css"

const Tags = (props) => {
  return (
    <div className={style.container}>
        <span className={style.text}>Tags:</span>
      <span className={style.tag} id="technology" onClick={props.selectTag}>
        Technology
      </span>{" "}
      {" "}
      <span className={style.tag} id="love" onClick={props.selectTag}>
        Love
      </span> {" "}
      <span className={style.tag} id="history" onClick={props.selectTag}>
        History
      </span>{" "}
      <span className={style.tag} id="famous-quotes" onClick={props.selectTag}>
        Famous quotes
      </span>
    </div>
  );
};

export default Tags;
