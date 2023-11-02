import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import { useEffect } from "react";
import "./WeatherForecast.css";

export default function WeatherForecast({ coordinates, celsius }) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }
  function loadData() {
    let longitude = coordinates.lon;
    let latitude = coordinates.lat;
    const apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((dailyForecast, index) => {
            if (index > 0 && index < 7) {
              return (
                <div className="col-lg-2" key={index}>
                  <WeatherForecastDay data={dailyForecast} celsius={celsius} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadData();
    return null;
  }
}
