import React from "react";
import { useState } from "react";

const AnimalApp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>No of Animails is {count}</div>
    </div>
  );
};

export default AnimalApp;
