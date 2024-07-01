import React, { useState } from "react";
import "./App.css";
import CitySelector from "./Components/CitySelector";
import WeatherCard from "./Components/WeatherCard";
import { Routes, Route } from "react-router-dom";
import weather2 from "./Components/weather2.jpg";

function App() {
  const [weatherData, setWeatherData] = useState();

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${weather2})`,
          height: "100vh",
          width: "100vw",
        }}
        className="App"
      >
        <header className="App-header">
          <h1>Real-Time Weather Dashboard</h1>
        </header>
        <main>
          <CitySelector weatherData={weatherData} handleWeatherData={handleWeatherData} />
          {weatherData && <WeatherCard weatherData={weatherData}/>}
         
        </main>
        <footer id="para">
          <p>Powered by Your Weather API Provider</p>
        </footer>
      </div>
    </>
  );
}

export default App;

{
  /* <WeatherCard weatherData={weatherData} */
}
