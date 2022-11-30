//  https://apilayer.com/marketplace/exchangerates_data-api
//  Use this API key for each request. Please check docs for more information.
//  pYAk79zPGW8rPxMIDBzGuEovej938ekp

import React, { useState, useEffect } from "react";
import PanelExchange from "./PanelExchange";
import { allSymbols } from "./symbolsOfCurrencies";

const CurrencyApi = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [getAmount, setGetAmount] = useState(0);
  const [amountResult, setAmountResult] = useState(0);

  const currencySelectedUpdater = (e) => {
    switch (e.target.name) {
      case "from":
        setFromCurrency(e.target.value.substr(0, 3));
        break;
      case "to":
        setToCurrency(e.target.value.substr(0, 3));
        break;
    }
  };

  // API setting:
  const myHeader = new Headers();
  myHeader.append("apikey", "pYAk79zPGW8rPxMIDBzGuEovej938ekp");
  const requestOptions = {
    method: "GET",
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

  const amountNumber = (e) => {
    setGetAmount(e.target.value)
    console.log(getAmount);
  };

  useEffect(() => {
    if (fromCurrency && toCurrency && getAmount) {
      const fetchData = () => {
        //  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${getAmount}`, requestOptions)
        //     .then(response => response.json())
        //     .then(result =>{
        //        console.log(result)
        //        setAmountResult(result.result)
        //          } )
        //     .catch(error => console.log('error', error));
        console.log('Fetch is done' , 'From:',fromCurrency , 'To: ' , toCurrency , 'Amount: ' , getAmount);
      };
      

      const timer = setTimeout(() => {
        fetchData();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [fromCurrency, toCurrency , getAmount]);

  return (
    <div>
      <h1>Currency Convertor</h1>
      <PanelExchange
        symbols={allSymbols}
        setCurrency={currencySelectedUpdater}
        amountNumber={amountNumber}
      />

      <br />
      <br />
      <div>
        {" "}
        {amountResult !== 0 && (
          <div>
            <span>{amountResult}</span> <span>{toCurrency && toCurrency}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyApi;
