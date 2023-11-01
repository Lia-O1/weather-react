import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import LocationButton from "./LocationButton";

export default function Weather({ defaultCity, celsius, setCelsius }) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [input, setInput] = useState(defaultCity);
  function getWeatherData(response) {
    let precipitationValue = "0 mm";
    let rainData = response.data.rain;
    if (rainData !== undefined) {
      for (let prop in rainData) {
        if (rainData[prop] !== undefined) {
          precipitationValue = `${rainData[prop]} mm`;
          break;
        }
      }
    }
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      timezone: response.data.timezone,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      country: response.data.sys.country,
      precipitation: precipitationValue,
    });
  }

  function processUserInput(input) {
    let trimmedInput = input.trim();
    if (trimmedInput.indexOf(" ") !== -1) {
      let words = trimmedInput.split(" ");
      let city = words[0];
      let country = words[1];
      if (country.length === 2 && isNaN(city)) {
        return { city, country };
      } else {
        throw new Error(
          "Please enter a valid location and country code (e.g., 'London GB')."
        );
      }
    } else if (!isNaN(trimmedInput)) {
      throw new Error("Please enter a valid location name.");
    } else {
      return { city: trimmedInput };
    }
  }

  function fetchWeatherData({ city, country }) {
    let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
    if (country) {
      apiUrl += `,${country}`;
    }
    apiUrl += `&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(getWeatherData)
      .catch((error) => {
        console.error(error);
        alert(
          "There was an error fetching the weather data. Please try again."
        );
      });
  }

  function search() {
    try {
      let userInput = processUserInput(input);
      fetchWeatherData(userInput);
    } catch (error) {
      alert(error.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }
  function handleInputChange(e) {
    setInput(e.target.value);
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
                onChange={handleInputChange}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
          <div className="col-4 d-flex flex-row-reverse ">
            <LocationButton getWeatherData={getWeatherData} />
          </div>
          <div className="row">
            <div className="col-md-6">
              {weatherData.city}, {weatherData.country}
              <br />{" "}
              <FormattedDate timezone={weatherData.timezone} showTime={false} />
            </div>
            <div className="col-md-6 text-end">
              <WeatherIcon code={weatherData.icon} size={24} />
              <WeatherTemperature
                celsiusTemperature={weatherData.temperature}
                celsius={celsius}
                setCelsius={setCelsius}
              />
              <br />{" "}
              <span>
                {weatherData.description[0].toUpperCase() +
                  weatherData.description.slice(1)}
              </span>
            </div>
          </div>
        </div>
        <WeatherInfo weatherData={weatherData}>
          <FormattedDate timezone={weatherData.timezone} showTime={true} />
        </WeatherInfo>
        <WeatherForecast
          coordinates={weatherData.coordinates}
          celsius={celsius}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
