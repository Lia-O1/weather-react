import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [celsius, setCelsius] = useState(true);
  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center py-3 ">Wt</h1>
        <Weather
          defaultCity="London"
          celsius={celsius}
          setCelsius={setCelsius}
        />
      </div>
    </div>
  );
}

export default App;
