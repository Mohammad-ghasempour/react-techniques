import React, { useState } from "react";
import { InputSearch } from "../searchFiltr/InputSearch";
import { ListView } from "../searchFiltr/ListView";

const fruitsList = [
  "apple",
  "oranges",
  "mango",
  "Orange",
  "Papaya",
  "Kiwi",
  "Pomegranate",
  "Avacado",
  "Coconut",
  "Watermelon",
  "Strawberry",
  "cranberry",
  "Kiwiberry",
  "pineapple",
];

export const SearchFilter = () => {
  const [fruits, setFruits] = useState(fruitsList);

  const onSearch = (e) => {
    const filteredList = fruitsList.filter((item) => {
      return item.toLowerCase().indexOf(e.target.value.toLowerCase()) == !-1;
    });
    setFruits(filteredList);
  };

  return (
    <>
      <div>
        <InputSearch onSearch={onSearch} />
      </div>
      <div>
        <ListView fruits={fruits} />
      </div>
    </>
  );
};
