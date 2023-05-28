import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './AnimalShow.css';

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
    <div className="app">
      <button className="btn-add" onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default AnimalApp;
