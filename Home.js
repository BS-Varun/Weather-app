// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [city, setCity] = useState('');

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div>
            <h2>Welcome to Weather App</h2>
            <p>Please enter a city to get the current weather information.</p>
            <form>
                <input type="text" value={city} onChange={handleCityChange} placeholder="Enter city" />
                <Link to={`/weather?city=${city}`}>
                    <button>Get Weather</button>
                </Link>
            </form>
        </div>
    );
}

export default Home;
