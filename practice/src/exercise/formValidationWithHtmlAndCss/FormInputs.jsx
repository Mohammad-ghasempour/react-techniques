import React from 'react';
import style from "./formInputs.module.css"

const FormInputs = (props) => {
    return (
        <div>
            <label></label>
            <input placeholder={props.placeholder}/>
            <p className={style.inputt}>Hi</p>
        </div>
    );
}

export default FormInputs;
