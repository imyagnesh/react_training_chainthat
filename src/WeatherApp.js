import React, { useState } from 'react';
import axiosInstance from "./utils/axiosInstance";
import 'bootstrap/dist/css/bootstrap.min.css';


function WeatherApp() {
  const [location, setLocation] = useState('Bangalore');
  const [weatherData, setWeatherData] = useState();
  const [errorMessage, setErrorMessage] = useState();


  const fetchData = async (locationInput) => {
    try {
      setErrorMessage();
      const res = await axiosInstance.get("weatherList", { params: { location: locationInput } });
      if (res.data != null && res.data.length > 0) {
        setWeatherData(res.data[0]);
      } else {
        setWeatherData();
        setErrorMessage("No Data Found for " + locationInput);
      }
    } catch (error) {
      console.log(error.message);
      setWeatherData();
      setErrorMessage(error.message)
    }
  };


  return (
    <div className="container my-sm-4 h-100 d-flex justify-content-center align-items-center ">
      <div >
        <h1>Weather App</h1>
        <div className="my-sm-4 ">
          <label className="ml-3 mr-3">
            Location <input type="text" value={location}
              onChange={e => setLocation(e.target.value)} />
          </label>
          <button className="mx-sm-4 btn btn-primary " onClick={() => fetchData(location)}>Search</button>

        </div>

        {(weatherData !== undefined && (<div className="my-sm-4">
          <label> Location: {weatherData.location}</label> <br></br>
          <label> Temperature: {weatherData.temperature}</label>
        </div>))}
        {(errorMessage !== undefined && (<div className="my-sm-5 ">
          <p class="text-danger">{errorMessage}</p></div>))}
      </div>
    </div>

  );



}

export default WeatherApp;