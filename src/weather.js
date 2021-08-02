import React, { PureComponent, createRef } from "react";
import WeatherForm from "./weatherForm";
import WeatherResult from "./weatherResult";
import axiosInstance from "./utils/axiosInstance";
import "./todo.css";

class Weather extends PureComponent {

    state = {
        weatherResponse: [],
        city: "",
        temp: 0
      };

    inputRef = createRef();

    fetchWeather = async (event) => {
        console.log('Fetching Weather for city - ' + this.inputRef.current.value);
        try {
            event.preventDefault();
            const res = await axiosInstance.get(`weather?city=${this.inputRef.current.value}`);
            this.setState({ weatherResponse: res.data});
            this.setState({city: this.state.weatherResponse[0].city});
            this.setState({temp: this.state.weatherResponse[0].temp_c});
            console.log(res.data);
            console.log('from state - ' + this.state.city);
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Weather App</h1>
                    <WeatherForm fetchWeather={this.fetchWeather} inputRef={this.inputRef} />
                    <WeatherResult city = {this.state.city} temp={this.state.temp} />
                </div>
            </>
        );
    }
}

export default Weather;