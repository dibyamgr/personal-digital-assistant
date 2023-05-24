import React from "react";
import { useState } from "react";

function getRandomAmimals() {
  const animals = ["bird", "cow", "cat", "cow", "horse", "gator", "dog"];
  return animals[Math.floor(Math.random() * animals.length)];
}

const AnimalApp = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAmimals()]);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      {animals}
    </div>
  );
};

export default AnimalApp;
