import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay({ data, celsius }) {
  function maxTemperature() {
    let celsiusTemperature = data.temp.max;
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    console.log(
      Math.round(celsiusTemperature),
      Math.round(fahrenheitTemperature)
    );
    if (celsius) {
      return Math.round(celsiusTemperature);
    } else {
      return Math.round(fahrenheitTemperature);
    }
  }

  function minTemperature() {
    let celsiusTemperature = data.temp.min;
    let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
    if (celsius) {
      return Math.round(celsiusTemperature);
    } else {
      return Math.round(fahrenheitTemperature);
    }
  }
  function uviIndex() {
    let uvi = Math.round(data.uvi);
    const uviMapping = {
      1: "Low",
      2: "Low",
      3: "Moderate",
      4: "Moderate",
      5: "Moderate",
      6: "High",
      7: "High",
      8: "Very high",
      9: "Very high",
      10: "Very high",
      11: "Extreme",
      12: "Extreme",
      13: "Extreme",
    };
    return uviMapping[uvi];
  }

  function day() {
    let date = new Date(data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="card h-100">
      <div className="card-body WeatherForecastDay-day">
        <h5 className="card-title">{day()}</h5>
        <hr />
        <div className="card-text">
          <div className="WeatherForecastDay-icon">
            <WeatherIcon code={data.weather[0].icon} size={36} />
          </div>
          <div>
            {data.weather[0].description[0].toUpperCase() +
              data.weather[0].description.slice(1)}
          </div>
          <div className="WeatherForecastDay-temperatures">
            {maxTemperature()}° / {minTemperature()}°
          </div>
          <div>UV: {uviIndex()}</div>
        </div>
      </div>
    </div>
  );
}
