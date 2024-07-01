import React from "react";
import "../App.css";
import weather from "./weather.jpg";

const WeatherCard = ({ weatherData }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <div>
        <div className="card-body">
          <h2
            style={{ fontSize: "50px", fontWeight: 600, color: "yellow" }}
            className="card-title"
          >
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p
            style={{ fontSize: "50px", fontWeight: 600, color: "yellow" }}
            className="card-text"
          >
            {new Date(weatherData.dt * 1000).toLocaleDateString()}
          </p>
          <div className="weather-details">
            <p
              style={{ fontSize: "50px", fontWeight: 600, color: "yellow" }}
              className="card-text"
            >
              Temperature: {weatherData.main.temp}°C
            </p>
            <p
              style={{ fontSize: "30px", fontWeight: 600, color: "yellow" }}
              className="card-text"
            >
              Humidity: {weatherData.main.humidity}%
            </p>
            <p
              style={{ fontSize: "30px", fontWeight: 600, color: "yellow" }}
              className="card-text"
            >
              Wind Speed: {weatherData.wind.speed} m/s
            </p>
            <p
              style={{ fontSize: "30px", fontWeight: 600, color: "yellow" }}
              className="card-text"
            >
              Weather: {weatherData.weather[0].description}
            </p>
          </div>
        </div>
      </div> */}
      <div 
        className="weather-card card shadow"
        style={{ backgroundColor: "#f8f9fa", border: "none", height : '60vh' }}
      >
        <div className="card-body">
          <h2 className="card-title" style={{ color: "#343a40" }}>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p className="card-text" style={{ color: "#6c757d" }}>
            {new Date(weatherData.dt * 1000).toLocaleDateString()}
          </p>
          <div className="weather-details" style={{ color: "#495057" }}>
            <p className="card-text">Temperature: {weatherData.main.temp}°C</p>
            <p className="card-text">Humidity: {weatherData.main.humidity}%</p>
            <p className="card-text">
              Wind Speed: {weatherData.wind.speed} m/s
            </p>
            <p className="card-text">
              Weather: {weatherData.weather[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
