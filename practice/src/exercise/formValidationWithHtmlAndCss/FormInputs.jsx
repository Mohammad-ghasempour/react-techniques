import React, { useState, useEffect } from "react";
import style from "./formInputs.module.css";

const FormInputs = (props) => {
  const {
    label,
    id,
    errorMessage,
    onChangeValues,
    value,
    isEmptyForm,
    ...inputProps
  } = props;
  const [showErrorSpan, setShowErrorSpan] = useState(false);

  return (
    <div className={style.formInput}>
      <label>
        {label}
        {props.required && <span className={style.smallStar}> *</span>}
      </label>
      <input
        className={style.input}
        {...inputProps}
        onChange={onChangeValues}
        value={value}
        onBlur={() => setShowErrorSpan(true)}
        focus={showErrorSpan.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setShowErrorSpan(true)
        }
      />
      {(showErrorSpan || isEmptyForm) && (
        <span className={style.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInputs;
