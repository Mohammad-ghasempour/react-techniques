import React from 'react';
import style from "./CSS/slider.module.css"

const QuoteLength = (props) => {
    
    const func = (e)=>{
        
         console.log(e.target.value)
        // ()=>props.changeLength
        props.changeLength(e.target.value)

    }
    return (
        <div className={style.sliderCountainer}>
           <span className={style.text}>Length of Quote: </span> <input className={style.slider} type="range" min="30" max="130" onChange={func} />
        </div>
    );
}

export default QuoteLength;
