import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />

        <h1>Lagos, Nigeria</h1>
        <ul>
          <li>Sunday 13:01 </li>
          <li>Partly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
                className="float-left"
              />
              <span className="temp">34</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 61%</li>
              <li>Wind: 13 km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        This project was coded by
        <a
          href="https://roardigitalhub.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Folasayo Owolabi{" "}
        </a>
        and is{" "}
        <a
          href="https://github.com/DPearls/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open sourced{" "}
        </a>{" "}
        on GitHub
      </footer>
    </div>
  );
}
export default App;
