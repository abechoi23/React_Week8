import { createContext, useContext, useState, useEffect } from "react";
import { getFirestore, getDocs, collection, addDoc, Timestamp } from "@firebase/firestore";
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const { user } = useContext(AuthContext);
  const db = getFirestore();
  const [isLoading, setIsLoading] = useState(false);

  const apiValue = process.env.REACT_APP_API_VALUE;

  useEffect(() => {
    const getWeather = async (cityInput) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiValue}`
        );
        const data = await response.json();
        return data
        await storeWeatherData(data); // Store weather data after successful fetch
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    const storeWeatherData = async (weatherData) => {
      try {
        await addDoc(collection(db, "weatherData"), {
          userId: user.uid,
          city: weatherData.name,
          temperature: weatherData.main.temp,
          high: weatherData.main.temp_max,
          low: weatherData.main.temp_min,
          forecast: weatherData.weather[0].description,
          humidity: weatherData.main.humidity,
          timestamp: Timestamp(),
        });
      } catch (error) {
        console.log(error);
      }
    };

    const getWeatherDataFromFirestore = async () => {
      setIsLoading(true);
      try {
        const weatherDataSnapshot = await getDocs(
          collection(db, "weatherData"),
          query =>
            query.where("userId", "==", user.uid).orderBy("timestamp", "desc").limit(1)
        );

        if (weatherDataSnapshot.empty) {
          console.log("No weather data found");
          setIsLoading(false);
          return;
        }

        weatherDataSnapshot.forEach(doc => setWeatherData(doc.data()));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getWeatherDataFromFirestore(); // get last saved weather data for the user from Firestore

    getWeather("Los Angeles"); // example call to getWeather

  }, [apiValue, db, user.uid]);

  const value = {
    weatherData,
    isLoading,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default WeatherProvider;
