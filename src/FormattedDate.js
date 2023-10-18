import React from "react";

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

  if (hours <= 12) {
    hours = hours;
  } else {
    hours = hours - 12;
  }

  if (showTime === true) {
    return (
      <span>
        {hours}:{minutes}
        {ampm}
      </span>
    );
  } else {
    return (
      <span>
        {day}, {todaysDate}
      </span>
    );
  }
}
