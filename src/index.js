import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// get element with an id of root
const el = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(el);

// render our App component into that root
root.render(<App />);
