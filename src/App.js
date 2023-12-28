import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <SearchEngine />
      <header className="App-header">
        <h1>Lagos, Nigeria</h1>
        <ul>
          <li>Sunday 13:01 </li>
          <li>Partly Cloudy</li>
        </ul>
      </header>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          34°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 61%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
      <footer>
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
      </footer>
    </div>
  );
}

export default App;
