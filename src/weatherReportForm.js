import React, { memo, forwardRef } from "react";

const WeatherReportForm = ({ fetchWeatherDetails,  inputRef}) => {
  console.log("Weather Report");
  return (
    <form onSubmit={fetchWeather}>
      <input type="text" ref={inputRef} />
      <button type="submit">
        Find
      </button>
    </form>
  );
};

export default memo(WeatherReportForm);
