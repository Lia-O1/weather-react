import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [celsius, setCelsius] = useState(true);
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Wt</h1>
        <Weather
          defaultCity="London"
          celsius={celsius}
          setCelsius={setCelsius}
        />

        <span className="github-link">
          {" "}
          <a
            href="https://github.com/Lia-O1/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced
          </a>{" "}
          by Olha Stepko
        </span>
      </div>
    </div>
  );
}

export default App;
