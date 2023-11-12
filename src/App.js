import React from "react";
import SearchEngine from "./SearchEngine";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <a
            className="App-link-header"
            href="https://github.com/DPearls/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Lagos{" "}
          </a>{" "}
          <a
            className="App-link-header"
            href="https://github.com/DPearls/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ibadan
          </a>
          <a
            className="App-link-header"
            href="https://github.com/DPearls/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abuja
          </a>
          <a
            className="App-link-header"
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
          <div className="Location">Lagos, Nigeria</div>
          <div className="Day-time">Sunday 13:01 </div>
          <div className="Weather-desc">Clouds</div>
        </subheader>
        <div className="row">
          <div className="col-6">
            <span className="icon">
              <img src="" alt="" />{" "}
            </span>
            <strong className="Tempp">17 </strong>
            <span className="Units"> °C </span>
            <div className="col-6">
              <ul>
                <li className="Humidy">
                  <span> Humidity:</span>62%
                </li>
                <li className="Windy">
                  Wind: <span></span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Forecast">
        <div className="Days">
          <div className="row">
            <div className="col-md-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thurs</span>
              <span>Fri</span>
            </div>
          </div>
          <div className="Humid-wind">
            <div className="row">
              <div className="col-md-2">
                <span>31%</span>
                <span>32%</span>
                <span>33%</span>
                <span>34%</span>
                <span>35%</span>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <p>
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
      </p>
    </div>
  );
}

export default App;
