import React from "react";

const SelectCurrency = (props) => {

  return (
    <>
      <select name={props.type} onChange={props.setCurrency} size="1">
        {props.symbols.map((item, index) => {
          return (
            <option key={index}>
              {item.symbol}
              {" , "}
              {item.value}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectCurrency;
