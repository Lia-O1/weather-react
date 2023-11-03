import React from "react";
import {
  WiThermometer,
  WiUmbrella,
  WiRaindrop,
  WiStrongWind,
} from "weather-icons-react";
import "./Weather.css";

export default function WeatherInfo({ weatherData, children }) {
  return (
    <div className="WeatherInfo mt-2">
      <div className="row mx-auto text-center">
        <div className="col-12 mx-auto text-center">
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
            <WiThermometer size={24} color="#fff" />
            <br />
            {Math.round(weatherData.feelsLike)}°C
          </span>
          <hr className="mb-0" />
        </div>
        <div className="col-lg-3 pt-3">
          Precipitation
          <span className="position-relative bottom-2">
            <WiUmbrella size={24} color="#fff" />
          </span>
          <br />
          {weatherData.precipitation}
          <hr className="mb-0" />
        </div>
        <div className="col-lg-3 pt-3">
          Humidity
          <WiRaindrop size={28} color="#fff" />
          <br />
          {weatherData.humidity}%
          <hr className="mb-0" />
        </div>
        <div className="col-lg-3 pt-3">
          Wind
          <WiStrongWind size={24} color="#fff" />
          <br />
          {Math.round(weatherData.wind)} m/s
          <hr className="mb-0" />
        </div>
      </div>
    </div>
  );
}
