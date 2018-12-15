import React, { Component } from "react";
import "./App.css";
import SensorsData from "./components/SensorsData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Sensors Data</h1>
        </header>
        <SensorsData />
      </div>
    );
  }
}

export default App;
