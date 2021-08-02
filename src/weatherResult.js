import React, { memo } from "react";

const WeatherResult = ({ city, temp }) => {
  return (
      <div className="weather-wrapper">
          City Name : {city}
          <br />
          Temperature : {temp}
      </div>
  )
}

export default memo(WeatherResult);
