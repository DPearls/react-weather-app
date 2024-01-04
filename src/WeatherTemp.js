import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <span className="WeatherTemp">
        <span className="temp">{Math.round(props.celcius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>{" "}
      </span>
    );
  } else {
    return (
      <span className="WeatherTemp">
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            °C
          </a>{" "}
          | °F
        </span>{" "}
      </span>
    );
  }
}
