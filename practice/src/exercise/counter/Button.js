import React from "react";

const Button = (props) => {
  return (
    <div style={{display: 'inline-flex'}}>
      <button style={{ border: "2px solid grey", borderRadius: "7px", width: '25px', margin:'5px' }}
      onClick={props.onChange}>
        {props.type}
      </button>
    </div>
  );
};
export default Button;
