//  https://apilayer.com/marketplace/exchangerates_data-api
//  Use this API key for each request. Please check docs for more information.
//  pYAk79zPGW8rPxMIDBzGuEovej938ekp

import React, { useState, useEffect } from "react";
import PanelExchange from "./PanelExchange";
import { allSymbols } from "./symbolsOfCurrencies";

const CurrencyApi = () => {
  const [fromCurrency, setFromCurrency] = useState("NOK");
  const [toCurrency, setToCurrency] = useState("USD");

  const currencyStateUpdater = (e) => {
    switch (e.target.name) {
      case "from":
        setFromCurrency(e.target.value.substr(0,3));
        break;
      case "to":
        setToCurrency(e.target.value.substr(0,3));
        break;
    }

  };

  // API setting:
  const myHeader = new Headers();
  myHeader.append("apikey", "pYAk79zPGW8rPxMIDBzGuEovej938ekp");
  const requestOptions = {
    method: "get",
    redirect: "follow",
    headers: myHeader,
  };

  ////

  // useEffect(() => {
  //   fetch("https://api.apilayer.com/exchangerates_data/symbols" , requestOptions)
  //   .then((res)=> res.json())
  //   .then((data)=> {
  //     console.log(data.symbols);
  //     setSymbols(data.symbols);
  // })
  //   .catch((error)=> console.log('error:' , error));
  // },[]);

  return (
    <div>
      <h1>Currency Convertor</h1>
      <PanelExchange symbols={allSymbols} setCurrency={currencyStateUpdater} />
      
      <br/><br/>
      from: {fromCurrency} <br/><br/>
      to:  {toCurrency}

    </div>
  );
};

export default CurrencyApi;
