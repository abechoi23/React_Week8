import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

const WeatherForm = () => {
  const [cityInput, setCityInput] = useState("");
  const { getWeather, isLoading } = useContext(DataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLoading) {
        return;
    }
    await getWeather(cityInput);
    setCityInput("");
  };

  const handleChange = (e) => {
    setCityInput(e.target.value);
  };

  return (
    <div className="container mt-3">
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="city">
        <b>City:</b>
      </label>
      <input
        type="text"
        id="city"
        name="city"
        value={cityInput}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>Submit</button>
    </form>
    </div>
  );
};

export default WeatherForm;
