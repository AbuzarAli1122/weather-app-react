import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import './Weather.css';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'e4256d23055a47a8877151603241108';

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [city, apiKey]);

  return (
    <div className="weather-app">
      <div className="weather-container">
        <h1>Weather App</h1>
        <SearchBar city={city} setCity={setCity} />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weather && <WeatherInfo weather={weather} />}
      </div>
    </div>
  );
};

export default WeatherApp;
