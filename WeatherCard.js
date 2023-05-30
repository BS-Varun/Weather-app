
import React from 'react';
import './styles.css';


function WeatherCard({ weatherData }) {
    if (!weatherData) {
        return null;
    }

    const { name, main, weather } = weatherData;

    return (
        <div className="weather-card">
            <h3 className="city-name">{name}</h3>
            <p className="temperature">Temperature: {Math.round(main.temp)}°C</p>
            <p className="description">Description: {weather[0].description}</p>
        </div>
    );
}

export default WeatherCard;
