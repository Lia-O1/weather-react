import React from "react";
import {
  WiThermometer,
  WiUmbrella,
  WiRaindrop,
  WiStrongWind,
} from "weather-icons-react";

export default function WeatherInfo({ weatherData, children }) {
  return (
    <div className="WeatherInfo">
      <div className="row text-center">
        <div className="col-12">
          <hr className="mt-0" />
          <span>Updated at: {children} </span>
          <hr className="mb-0" />
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-3 pt-3">
          {" "}
          <span>
            Feels like
            <WiThermometer size={24} color="#000" />
            <br />
            {Math.round(weatherData.feelsLike)}°C
          </span>
          <hr className="mb-0" />
        </div>
        <div className="col-lg-3 pt-3">
          Precipitation
          <WiUmbrella size={24} color="#000" />
          <br />
          {weatherData.precipitation}
          <hr className="mb-0" />
        </div>
        <div className="col-lg-3 pt-3">
          Humidity
          <WiRaindrop size={24} color="#000" />
          <br />
          {weatherData.humidity}%
          <hr className="mb-0" />
        </div>
        <div className="col-lg-3 pt-3">
          Wind
          <WiStrongWind size={24} color="#000" />
          <br />
          {weatherData.wind} m/s
          <hr className="mb-0" />
        </div>
      </div>
    </div>
  );
}
