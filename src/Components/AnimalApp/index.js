import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAmimals() {
  const animals = ["bird", "cow", "cat", "cow", "horse", "gator", "dog"];
  return animals[Math.floor(Math.random() * animals.length)];
}

const AnimalApp = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAmimals()]);
  };

  // List Building in React
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{renderedAnimals}</div>
    </div>
  );
};

export default AnimalApp;
