import React, { Component } from 'react';
import './App.css';
import SensorsData from './components/SensorsData';

class App extends Component {

  render() {
    
    return (

      <div className="App">

        <h1>Sensors Data</h1>
        <SensorsData />

      </div>

    );
  }
}

export default App;
