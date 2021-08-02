import React, { memo } from "react";

const WeatherForm = ({ fetchWeather,  inputRef}) => {
  console.log("WeatherForm");
  return (
    <form onSubmit={fetchWeather}>
      <input type="text" ref={inputRef} />
      <button type="submit"> Get Weather </button>
    </form>
  );
};

export default memo(WeatherForm);