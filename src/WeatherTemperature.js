import React from "react";
export default function WeatherTemperature({
  celsiusTemperature,
  celsius,
  setCelsius,
}) {
  const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  if (celsius) {
    return (
      <span>
        {Math.round(celsiusTemperature)} °C |{" "}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setCelsius(false);
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
            setCelsius(true);
          }}
        >
          C
        </a>{" "}
      </span>
    );
  }
}
