import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }

  let apiKey = "bd5b4461863eddaa6ced0a0a67989e0a";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Friday</div>
          <WeatherIcon code="03n" size={34} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">33°</span>
            <span className="WeatherForecast-temp-min">27°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
