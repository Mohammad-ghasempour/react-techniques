import React , {useState} from "react";
import SelectCurrency from "./SelectCurrency";

const PanelExchange = (props) => {

  const [amount, setAmount] = useState(0);

  const onChangeAmount= (e)=>{
    setAmount(e.target.value);
    }
 

  return (
    <div>
      <label>From: </label> <SelectCurrency symbols={props.symbols} type="from" setCurrency={props.setCurrency} />
      <br />
      <br />
      <input type="number" placeholder="Number of amount..." onChange={props.amountNumber}/>
      <br />
      <br />
      <label>To: </label> <SelectCurrency symbols={props.symbols} type="to" setCurrency={props.setCurrency} />
    </div>
  );
};

export default PanelExchange;
