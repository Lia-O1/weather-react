import React from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Weather.css";

export default function LocationButton({ getWeatherData }) {
  function fetchData(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(`${apiUrl}`).then(getWeatherData);
  }
  function getPosition() {
    navigator.geolocation.getCurrentPosition(fetchData);
  }
  return (
    <button onClick={getPosition} className="button">
      <span className="d-none d-sm-inline">My Location</span>{" "}
      <span className="d-sm-none">
        <FaMapMarkerAlt color="white" size="1.2em" />
      </span>
    </button>
  );
}
