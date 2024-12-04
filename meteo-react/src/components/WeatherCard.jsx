import { useEffect , useState } from "react";

const WeatherCard = ({ date, temp, description, icon, delay }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay); // Delay animation
    return () => clearTimeout(timeout); // Cleanup timeout
  }, [delay]);

  return (
    <div className={`forecast-card ${visible ? "visible" : ""}`}>
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
