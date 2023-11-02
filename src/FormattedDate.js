import React from "react";
import "./Weather.css";

export default function FormattedDate({ timezone, showTime }) {
  let date = new Date();
  let timeShift = timezone;
  let offset = timeShift / 3600;
  let utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
  let time = utcTime + 3600000 * offset;
  let cityTime = new Date(time);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let todaysDate = cityTime.getDate();
  let day = days[cityTime.getDay()];
  let hours = cityTime.getHours();
  let minutes = cityTime.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let ampm = hours >= 12 ? "PM" : "AM";
  let fixedHours;

  if (hours <= 12) {
    fixedHours = hours;
  } else {
    fixedHours = hours - 12;
  }

  if (showTime) {
    return (
      <span className="FormattedDate-">
        {fixedHours}:{minutes} {""}
        {ampm}
      </span>
    );
  }
  return (
    <span className="FormattedDate-date">
      {day}, {todaysDate}
    </span>
  );
}
