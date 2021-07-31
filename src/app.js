import React, { PureComponent, createRef } from "react";
import axiosInstance from "./utils/axiosInstance";
import "./root.css";
class App extends PureComponent {
  state = {
    weatherReport: [],
    report: "",
  };
  inputRef = createRef();

  getWeather() {
    console.log(this.inputRef.current.value);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const res = await axiosInstance.get("weather_reports");
      this.setState({ weatherReport: res.data });
      // console.log(this.state.weatherReport);
    } catch (error) {
      console.log(error.message);
    }
  };

  getWeather = () => {
    this.setState({ report: "" });
    const city1 = this.inputRef.current.value;
    const weatherReportList = this.state.weatherReport;
    weatherReportList.filter((r) => {
      if (r.city === city1) {
        this.setState({ report: r.report });
      }
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <h1>Weather Report</h1>
        </div>

        <div className="content">
          <label>Please enter city name : </label>
          <input type="text" ref={this.inputRef}></input>
          <span>
            <button onClick={this.getWeather}> Report </button>
          </span>
        </div>
        <div className="content1">
          <textarea
            placeholder="Weather report of selected city is...."
            style={{ width: "400px", height: "100px" }}
            value={this.state.report}
          ></textarea>
        </div>
      </div>
    );
  }
}
export default App;
