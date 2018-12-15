import React, { Component } from "react";

const url = "http://192.168.1.177";

export default class SensorsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mqCo: "",
      mqNh: "",
      rad: ""
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.loadData();
    }, 100);
  }

  loadData() {
    fetch(url, { mode: "cors" })
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
    const { mqCo, mqNh, rad } = this.state;

    return (
      <div className="sensors_wrapper">
        <div className="sensor_block">
          <span className="sensor_title">Sensor MQ9</span>
          <br />
          <span className="sensor_value">{`${mqCo} ppm`}</span>
        </div>

        <div className="sensor_block">
          <span className="sensor_title">Sensor MQ135</span>
          <br />
          <span>{`${mqNh} ppm`}</span>
        </div>

        <div className="sensor_block">
          <span className="sensor_title">Radiation Sensor</span>
          <br />
          <span className="sensor_value">{`${rad}`}</span>
        </div>
      </div>
    );
  }
}
