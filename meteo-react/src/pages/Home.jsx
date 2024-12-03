import React, { useState } from "react";
import { fetchWeather, getWeatherIcon } from "../api/weather";
import WeatherCard from "../components/WeatherCard"; // Import the WeatherCard component

const Home = () => {
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!location.trim()) {
      setError("Veuillez entrer un nom de ville.");
      return;
    }

    try {
      setError("");

      // Fetch the forecast data
      const data = await fetchWeather(location);

      // Parse forecast data for the next 3 days
      const uniqueDays = {};
      const forecastData = data.list
        .filter((item) => {
          const date = new Date(item.dt * 1000).toLocaleDateString("fr-FR", {
            weekday: "long",
          });

          if (!uniqueDays[date]) {
            uniqueDays[date] = true;
            return true; // Keep only the first entry of each day
          }

          return false; // Ignore other entries for the same day
        })
        .slice(0, 3); // Limit to 3 days

      const formattedForecast = forecastData.map((item) => ({
        date: new Date(item.dt * 1000).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
        }),
        temp: Math.round(item.main.temp), // Temp in Celsius
        description: item.weather[0].description,
        icon: getWeatherIcon(item.weather[0].icon),
      }));

      setForecast(formattedForecast);
    } catch (error) {
      console.error(error);
      setError("Ville introuvable. Veuillez réessayer.");
    }
  };

  return (
    <div className="weather-container">
      <h1>Prévision météo</h1>
      <div className="iconIMG">
        <img
          src="https://cdn-icons-png.flaticon.com/512/552/552448.png"
          alt="icone meteo"
        />
      </div>
      <input
        type="text"
        id="locationInput"
        placeholder="Entrez le nom d'une ville"
        aria-label="Rechercher une ville"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>
        Rechercher
      </button>

      {error && <p className="error">{error}</p>}

      <div className="white-box">
        {forecast.length > 0 && (
          <div className="weather-info">
            {forecast.map((forecastItem, index) => (
              <WeatherCard
                key={index}
                date={forecastItem.date}
                temp={forecastItem.temp}
                description={forecastItem.description}
                icon={forecastItem.icon}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
