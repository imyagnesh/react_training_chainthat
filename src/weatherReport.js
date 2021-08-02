import React, { memo } from "react";

const WeatherReport = ({ report }) => {
  console.log("WeatherList");
  return (
    <div className="todo-list-container">
      {report.map((weather, index) => {
        return (
          <div key={weather.id} className="todo-list-wrapper">

            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {weather.city}
            </span>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}>
              {temperature.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default memo(WeatherReport);
