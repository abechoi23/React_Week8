import React, { useContext } from "react";
import WeatherForm from "../components/weatherForm";
import WeatherDetails from "../components/weatherDetails";
import { AuthContext } from "../contexts/AuthProvider";



const WeatherView = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      {user.loggedIn ? (
        <>
          <WeatherForm />
          <WeatherDetails />
        </>
      ) : (
        <></>
      )}
      <div>
        { user.loggedIn ? ( 
        <>
        <button onClick={logout} className="btn btn-primary">Logout</button>
        <p>Current User: {user.displayName} </p>
        </>
        ) : (
          <>
          <h1>Welcome to the Weather App</h1>
          <h2>Please Login to Continue</h2>
        <button onClick={login} className="btn btn-primary">Login</button>
        </>
        )} 
      </div>
    </div>
  );
};

export default WeatherView;
