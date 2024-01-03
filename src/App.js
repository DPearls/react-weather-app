import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchEngine from "./SearchEngine";
import "./styles.css";

function App() {
  return (
    <div>
      <div className="App">
        <div className="container">
          <SearchEngine defaultCity="Ibadan" />
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
