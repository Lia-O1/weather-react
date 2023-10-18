import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Wt</h1>
        <Weather defaultCity="London" />

        <p>
          {" "}
          <a
            href="https://github.com/Lia-O1/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced
          </a>{" "}
          by Olha Stepko
        </p>
      </div>
    </div>
  );
}

export default App;
