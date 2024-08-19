import React from 'react';

const WeatherInfo = ({ weather }) => {
  return (
    <div className="weather-info">
      <h2>Location: {weather.location.name}, {weather.location.country}</h2>
      <p> Temperature: {Math.round(weather.current.temp_c)}°C</p>
      <p> Condition: {weather.current.condition.text}</p>
    </div>
  );
};

export default WeatherInfo;
