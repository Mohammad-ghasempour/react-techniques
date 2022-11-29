import React from "react";

const SelectCurrency = (props) => {
  // var dddd = [{}]
  // Object.keys(props.symbols).map((item, index) => {
  //     dddd.push({
  //          symbol: item,
  //          value: props.symbols[item]
  //       })
  //     })
  //     console.log(dddd)

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
