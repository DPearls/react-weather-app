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
          <div>Lagos</div>
          <div>Sunday 13:01 </div>
          <div>Clouds</div>
        </subheader>
        <div className="temperature"></div>
        <span className="icon">
          <img src="" alt="Cloudy" id="icon" /> 17C{" "}
        </span>
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
