import React from "react";
import "./inputs.css";

const Inputfield = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <input
        className="input"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        {...props.validator}
      />
    </div>
  );
};

export default Inputfield;
