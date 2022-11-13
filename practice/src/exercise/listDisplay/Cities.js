import React from "react";

const Cities = (props) => {
  return (
    <>
      {props.city.map((city) => {
        return (
          <ul key={city}>
            <li>{city}</li>
          </ul>
        );
      })}
    </>
  );
};
export default Cities;
