import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [input, setInput] = useState(null);
  const [message, setMessage] = useState(null);
  function handleMessage(weatherConditions) {
    return (
      <ul>
        <li>Temperature: {Math.round(weatherConditions.temperature)}°C</li>
        <li>Description: {weatherConditions.description}</li>
        <li>Humidity: {weatherConditions.humidity}%</li>
        <li>Wind: {weatherConditions.wind} km/h</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${weatherConditions.icon}@2x.png`}
            alt="weather-description"
          />
        </li>
      </ul>
    );
  }
  function getWeather(response) {
    let weatherConditions = {
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    };
    setMessage(handleMessage(weatherConditions));
  }
  function userInput(event) {
    let location = event.target.value;
    setInput(location);
  }
  function searchForLocation(event) {
    event.preventDefault();
    let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getWeather);
  }
  return (
    <div className="Search">
      <form onSubmit={searchForLocation}>
        <input type="search" placeholder="Enter a city" onChange={userInput} />
        <input type="submit" value="Search" />
      </form>
      <span>{message}</span>
    </div>
  );
}
