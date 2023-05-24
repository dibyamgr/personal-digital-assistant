import "bulma/css/bulma.css";
import { useState } from "react";
import AnimalApp from "./Components/AnimalApp";
import PDA from "./Components/PDA";

function App() {
  const [active, setActive] = useState("");
  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">React Simple Projects</p>
        </div>
      </section>

      <div className="container">
        <section className="section"></section>
        <div className="columns">
          <div className="buttons">
            <button className="button is-primary is-light" onClick={() => setActive("PDA")}>
              Personal Digital Assistant
            </button>
            <button className="button is-link is-light" onClick={() => setActive("Animal")}>
              Amimal App
            </button>
          </div>
        </div>
        <div className="mt-5">{active === "PDA" ? <PDA /> : active === "Animal" ? <AnimalApp /> : null}</div>
      </div>
    </>
  );
}

export default App;
