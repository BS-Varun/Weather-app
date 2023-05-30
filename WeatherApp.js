
import React, { useState } from 'react';
import WeatherCard from './WeatherCard';

function WeatherApp() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        let response;
        try {
            const apiKey = "16e375584554d875851370d9c8e97aa7"; // Replace with your actual API key
            const response = await fetch(" https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey

            );
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error(error);
            setWeatherData(null);
        }

        setIsLoading(false);
    };

    return (
        <div>
            <h2>Weather App</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter a city"
                />
                <button type="submit">Get Weather</button>
            </form>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                weatherData && <WeatherCard weatherData={weatherData} />
            )}
        </div>
    );
}

export default WeatherApp;
