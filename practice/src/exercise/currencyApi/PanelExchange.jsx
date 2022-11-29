import React from "react";
import SelectCurrency from "./SelectCurrency";

const PanelExchange = (props) => {
  return (
    <div>
      <label>From: </label> <SelectCurrency symbols={props.symbols} type="from" setCurrency={props.setCurrency} />
      <br />
      <br />
      <br />
      <label>To: </label> <SelectCurrency symbols={props.symbols} type="to" setCurrency={props.setCurrency} />
    </div>
  );
};

export default PanelExchange;
