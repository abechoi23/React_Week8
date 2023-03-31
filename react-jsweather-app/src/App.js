import "./App.css";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import WeatherView from "./views/weatherView";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
  const { login, user, logout } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
        { user.loggedIn ? ( 
        <>
        <button onClick={logout}>Logout</button>
        <p>Current User: {user.displayName} </p>
        </>
        ) : (
        <button onClick={login}>Login</button>
        )} 
      </div> */}
      <Routes>
        <Route path="/" element={<WeatherView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
