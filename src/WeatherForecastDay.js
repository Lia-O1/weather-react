import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({ data }) {
  console.log(data.uvi);
  function maxTemperature() {
    let temperature = Math.round(data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(data.temp.min);
    return `${temperature}°`;
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
      <div className="card-body">
        <h5 className="card-title">{day()}</h5>
        <hr />
        <div className="card-text">
          <WeatherIcon code={data.weather[0].icon} size={36} />
          <div className="WeatherForecast-description">
            {data.weather[0].description[0].toUpperCase() +
              data.weather[0].description.slice(1)}
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperature-min">
              {minTemperature()}
            </span>
          </div>
          <div className="WeatherForecast-uvi">UV: {uviIndex()}</div>
        </div>
      </div>
    </div>
  );
}
