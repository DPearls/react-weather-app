import React from "react";
import SearchEngine from "./SearchEngine";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div ClassName="row">
          <div className="col">
            <span className="location"></span>
            <h1>Lagos</h1>
          </div>
        </div>

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
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
