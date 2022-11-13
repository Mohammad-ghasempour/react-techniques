import React from "react";
import Cities from "./Cities";

const citiesList = [
  "Mosco",
  "Tehran",
  "Oslo",
  "Baku",
  "Stavanger",
  "Dubi",
  "Abuzabi",
  "saransk",
  "Kristiansand",
  "New york",
  "Dehli new",
  "Amesterdom",
  "Isfahan",
  "Ramhormoz",
];

const CitiesList = () => {
  let lessThan6 = [],
    moreThan6 = [];
  citiesList.forEach((city) => {
    city.length < 7 ? lessThan6.push(city) : moreThan6.push(city);
  });

  return (
    <>
      <h2>List of Cities</h2>
      <div style={{ display: "flex", justifyContent: "space-around" , width : '600px' , margin: 'auto' }}>
        <div>
          {" "}
          <b>Small name cities: </b>
          <Cities city={lessThan6} />
        </div>
        <div>
          {" "}
          <b>Big name cities: </b>
          <Cities city={moreThan6} />
        </div>
      </div>
    </>
  );
};

export default CitiesList;
