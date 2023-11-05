import React from "react";
import SearchEngine from "./SearchEngine";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="location"></span>
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
        <ul>
          <li>
            <span id="date"></span>
          </li>
          <li id="description"></li>
        </ul>
        <div className="row">
          <div className="col-6">
            <span className="icon">
              <img src="" alt="Partly cloudy" id="icon" />
            </span>
            <strong id="temperature"> </strong>
            <span className="units"> °C </span>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity:<span id="humidity"></span>%
              </li>
              <li>
                Wind: <span id="wind"></span> km/h
              </li>
            </ul>
          </div>
        </div>
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
      </header>
    </div>
  );
}

export default App;
