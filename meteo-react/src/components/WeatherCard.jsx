const WeatherCard = ({ date, temp, description, icon }) => {
  return (
    <div className="forecast-card">
      <h3>{date}</h3>
      <div className="forecast-details">
        <img src={icon} alt={`Weather Icon for ${description}`} />
        <div>
          <p className="temp">{temp}°C</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
