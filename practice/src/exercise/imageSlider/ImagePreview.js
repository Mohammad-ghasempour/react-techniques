import React from "react";
import "./imageSlider.css"

export const ImagePreview = (props) => {
    return (
        <div>
            <img className="image" src={props.image.imageUrl}/>
        </div>
    );
};
export default ImagePreview;
