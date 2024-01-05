import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
        <div className="col">
          <div className="WeatherForecast-day">Friday</div>
          <WeatherIcon code="03n" size={34} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">33°</span>
            <span className="WeatherForecast-temp-min">27°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Friday</div>
          <WeatherIcon code="03n" size={34} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">33°</span>
            <span className="WeatherForecast-temp-min">27°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Friday</div>
          <WeatherIcon code="03n" size={34} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">33°</span>
            <span className="WeatherForecast-temp-min">27°</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecast-day">Friday</div>
          <WeatherIcon code="03n" size={34} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">33°</span>
            <span className="WeatherForecast-temp-min">27°</span>
          </div>
        </div>
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
