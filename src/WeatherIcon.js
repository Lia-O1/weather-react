import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiDayRain,
  WiNightRain,
  WiThunderstorm,
  WiSnowflakeCold,
  WiWindy,
} from "weather-icons-react";

export default function WeatherIcon({ code }) {
  const codeMapping = {
    "01d": WiDaySunny,
    "01n": WiNightClear,
    "02d": WiDayCloudy,
    "02n": WiNightCloudy,
    "03d": WiCloud,
    "03n": WiCloud,
    "04d": WiCloudy,
    "04n": WiCloudy,
    "09d": WiRain,
    "09n": WiRain,
    "10d": WiDayRain,
    "10n": WiNightRain,
    "11d": WiThunderstorm,
    "11n": WiThunderstorm,
    "13d": WiSnowflakeCold,
    "13n": WiSnowflakeCold,
    "50d": WiWindy,
    "50n": WiWindy,
  };
  const IconComponent = codeMapping[code];
  return <IconComponent size={24} color="#000" />;
}
