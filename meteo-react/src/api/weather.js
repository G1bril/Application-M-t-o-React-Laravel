import axios from 'axios';

// Fetch Weather Data
export async function fetchWeather(location) {
    const apiKey = '2962802eb10e823968a8430629f72725'; // TODO: secure api key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

    try {
        const response = await axios.get(apiUrl, {
            params: {
                q: location,
                appid: apiKey,
                units: 'metric',
                lang: 'fr',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw new Error('Failed to fetch weather data.');
    }
}

// Get Weather Icon URL
export function getWeatherIcon(iconCode) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
