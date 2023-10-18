import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weather({ defaultCity }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(defaultCity);
  function getWeatherData(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      timezone: response.data.timezone,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function search() {
    let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeatherData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }
  function handleCityChange(e) {
    setCity(e.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-8">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Start typing..."
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className="col-4 d-flex flex-row-reverse ">
            {" "}
            {/*use text-end?*/}
            <button>My Location</button>
          </div>
          <div className="row">
            <div className="col-md-6">
              {weatherData.city}, {weatherData.country}
              <br />{" "}
              <FormattedDate timezone={weatherData.timezone} showTime={false} />
            </div>
            <div className="col-md-6 text-end">
              <WeatherIcon code={weatherData.icon} />
              <WeatherTemperature
                celsiusTemperature={weatherData.temperature}
              />
              <br />{" "}
              <span>
                {weatherData.description[0].toUpperCase() +
                  weatherData.description.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
