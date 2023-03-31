import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataProvider";
import getWeatherData from "../utils/getWeatherData";

const WeatherDetails = () => {
  const { user } = useContext(DataContext);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setIsLoading(true);

        // Call the getWeatherData function to fetch the weather data for the logged-in user
        const data = await getWeatherData(user.uid);

        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    if (user) {
      fetchWeatherData();
    }
  }, [user]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error fetching weather data</p>;
  }
  if (!weatherData) {
    return null;
  }

  // Convert temperature from Kelvin to Fahrenheit
  const tempF = ((weatherData.temperature - 273.15) * 9) / 5 + 32;
  const tempMaxF = ((weatherData.high - 273.15) * 9) / 5 + 32;
  const tempMinF = ((weatherData.low - 273.15) * 9) / 5 + 32;

  // Capitalize the first letter of the forecast description
  const capitalizedForecast =
    weatherData.forecast.charAt(0).toUpperCase() +
    weatherData.forecast.slice(1);

  const humidity = weatherData.main.humidity;

  return (
    <div>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <th scope="row">City</th>
            <td>{weatherData.name}</td>
          </tr>
          <tr>
            <th scope="row">Temperature</th>
            <td>{`${tempF.toFixed(2)}°F`}</td>
          </tr>
          <tr>
            <th scope="row">High</th>
            <td>{`${tempMaxF.toFixed(2)}°F`}</td>
          </tr>
          <tr>
            <th scope="row">Low</th>
            <td>{`${tempMinF.toFixed(2)}°F`}</td>
          </tr>
          <tr>
            <th scope="row">Forecast</th>
            <td>{capitalizedForecast}</td>
          </tr>
          <tr>
            <th scope="row">Humidity</th>
            <td>{`${humidity}%`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherDetails;
