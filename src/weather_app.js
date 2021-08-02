import React, { PureComponent, createRef } from "react";
import WeatherReportForm from "./weatherReportForm";
import WeatherData from "./weatherReport";

import axiosInstance from "./utils/axiosInstance";
import "./todo.css";

class WeatherApp extends PureComponent {
  state = {
    report: [],
  };

  inputRef = createRef();

  fetchWeatherDetails = async (event) => {
    event.preventDefault();

    try {
      console.log('get weather report');
      const city=this.inputRef.current.value;

      const res = await axiosInstance.get('weather?city='&{city});
      console.log(res);
      this.setState({ report: res.data });
    } catch (error) {
      console.log(error.message);
      this.setState({ status: "load_data_error" });
    }
  };


  render() {

    return (
      <div className="container">
        <h1>Weather App</h1>
        <WeatherReportForm inputRef={this.inputRef} />
        <WeatherData/>
      </div>
    );
  }
}

export default WeatherApp;
