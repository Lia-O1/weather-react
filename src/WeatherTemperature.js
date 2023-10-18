import React, { useState } from "react";
export default function WeatherTemperature({ celsiusTemperature }) {
  const [unit, setUnit] = useState("metric");
  const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  if (unit === "metric") {
    return (
      <span>
        {Math.round(celsiusTemperature)} °C |{" "}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setUnit("imperial");
          }}
        >
          F
        </a>
      </span>
    );
  } else {
    return (
      <span>
        {Math.round(fahrenheitTemperature)} °F |{" "}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setUnit("metric");
          }}
        >
          C
        </a>{" "}
      </span>
    );
  }
}
