import React from "react";
import "./Weather.css";

export default function WeatherTemperature({
  celsiusTemperature,
  celsius,
  setCelsius,
}) {
  const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  if (celsius) {
    return (
      <span className="WeatherTemperature-temperature pe-4">
        {Math.round(celsiusTemperature)}
        <span className="WeatherTemperature-units">
          °C |
          <a
            title="Show the temperature in Fahrenheit"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setCelsius(false);
            }}
          >
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature-temperature pe-4">
        {Math.round(fahrenheitTemperature)}
        <span className="WeatherTemperature-units">
          °F |
          <a
            title="Show the temperature in Celsius"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setCelsius(true);
            }}
          >
            {" "}
            °C
          </a>
        </span>
      </span>
    );
  }
}
