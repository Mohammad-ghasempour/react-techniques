import React from "react";
import "./imageSlider.css"

export const IterateButton = (props) => {
    return (
        <div className="iterativeButton">
            <button className="sliderButton" onClick={()=> props.action(`${props.type}`)}>{props.type}</button>
        </div>
    );
};
export default IterateButton;
