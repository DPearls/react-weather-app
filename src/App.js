import React from "react";
import SearchEngine from "./SearchEngine";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <a
            className="App-link"
            href="https://github.com/DPearls/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Lagos{" "}
          </a>{" "}
          <a
            className="App-link"
            href="https://github.com/DPearls/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ibadan
          </a>
          <a
            className="App-link"
            href="https://github.com/DPearls/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abuja
          </a>
          <a
            className="App-link"
            href="https://github.com/DPearls/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Port-Harcourt
          </a>{" "}
        </h1>
        <SearchEngine />
      </header>
      <div className="Info">
        <subheader className="Info-header">
          <div>Lagos, Nigeria</div>
          <div>Sunday 13:01 </div>
          <div>Clouds</div>
        </subheader>
        <div className="row">
          <div className="col-6">
            <span className="icon">
              <img src="" alt="" id="icon" /> <strong>17°C </strong>Humidity:
              62% Wind: 3 km/h
            </span>
          </div>
        </div>
      </div>
      <div className="days">Mon Tue Wed Thurs Fri</div>
      <a
        className="App-link"
        href="https://github.com/DPearls/react-weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Source Code{" "}
      </a>{" "}
      by{" "}
      <a
        href="https://roardigitalhub.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Folasayo Owolabi{" "}
      </a>
    </div>
  );
}

export default App;
