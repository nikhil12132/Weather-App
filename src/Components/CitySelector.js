import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

const CitySelector = ({ handleWeatherData, weatherData }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const myApiKey = "998d7b1311a8e799eca9d962e7756fb9"; // Replace with your API key
      //   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

      const myApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;
      const response = await axios.get(myApiUrl);
      console.log(response);
      handleWeatherData(response.data);
      setError("");
    } catch (error) {
      setError("City not found. Please try again.");
      console.error(error);
    }
  };
  useEffect(() => {
    if (city) {
      handleSearch();
    }
  }, []);

  // useEffect(() => {
  //   const fetchWeatherData = async () => {
  //     try {
  //       const myApiKey = "998d7b1311a8e799eca9d962e7756fb9"; // Replace with your API key
  //       const myApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}&units=metric`;
  //       const response = await axios.get(myApiUrl);
  //       console.error(response);
  //       handleWeatherData(response.data);
  //       setError("");
  //     } catch (error) {
  //       setError("City not found. Please try again.");
  //       console.error(error);
  //     }
  //   };

  //   fetchWeatherData();
  // }, [city]); // Add city as a dependency if it can change

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
      className="city-selector container mt-4"
    >
      <input
        className="form-control"
        style={{ display: "flex", justifyContent: "center", width: "400px" }}
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange}
      />
      <button
        style={{ marginLeft: "5px", fontWeight: 900, letterSpacing: 1 }}
        className="btn btn-success"
        onClick={handleSearch}
      >
        Search
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CitySelector;
