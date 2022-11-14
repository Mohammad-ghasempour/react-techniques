import React from "react";
import "./imageSlider.css"

export const BulletSlider = (props) => {
    
    return (
    <div className="bulletContainer">
      {Array.from({ length: props.imageLength }).map((item, index) => {
        return <span key={index} className="dot" onClick={()=>props.changeImage(index)}>
            {index+1}
            </span>;
      })}
    </div>
  );
};
export default BulletSlider;
