import React, { Component } from 'react';

const url = "http://192.168.1.177"

export default class SensorsData extends Component {

constructor(props) {
    super(props)
    this.state = {
      mqCo: "",
      mqNh: "",
      rad: ""
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    fetch(url, {mode: 'cors'})
      .then(r => r.json())
      .then(data => {
        this.setState({
          mqCo: data.gasData,
          mqNh: data.nhData,
          rad: data.radData
        });
      });
  }

  render() {

    const {mqCo, mqNh, rad} = this.state

    return (
      <div>

        <div>
          <span>Sensor MQ9</span>
          <br/>
          <span>
            {mqCo}
          </span>
        </div>

        <div>
          <span>Sensor MQ135</span>
          <br/>
          <span>
            {mqNh}
          </span>
        </div>

        <div>
          <span>Radiation Sensor</span>
          <br/>
          <span>
            {rad}
          </span>
        </div>

      </div>
    );
  }
}