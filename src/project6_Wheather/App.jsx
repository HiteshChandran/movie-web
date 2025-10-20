"use strict";

import React, { useEffect, useState } from "react";
import "./App.scss";

import carVideo from "../assets/Cloudy.mp4";
import rainVideo from "../assets/Rainy.mp4";
import stormVideo from "../assets/storm.mp4";
import snowVideo from "../assets/Snow.mp4";
import hazeVideo from "../assets/Haze.mp4";
import defaultVideo from "../assets/Earth.mp4";

const api = {
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
  key: "e1c20d19dd4f4b200227847d7e3de6e7",
};

const weatherVideos = {
  Clear: carVideo,
  Rain: rainVideo,
  Drizzle: rainVideo,
  Thunderstorm: stormVideo,
  Clouds: carVideo,
  Snow: snowVideo,
  Mist: hazeVideo,
  Haze: hazeVideo,
  Fog: hazeVideo,
};

const App = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  const weatherCondition = data.weather?.[0]?.main;
  const backgroundVideo = weatherVideos[weatherCondition] || defaultVideo;

  const fetchWeather = () => {
    if (!search) return;

    fetch(`${api.baseUrl}?q=${search}&appid=${api.key}&units=metric`)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="app">
      

      <video autoPlay loop muted playsInline key={backgroundVideo}>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      

      <div className="search">
        <input
          type="text"
          placeholder="Enter city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>

      

      {data.main ? (
        <div className="weather-info">
          <p>City: {data.name}</p>
          <p className="temp">{Math.round(data.main.temp)}°C</p>
          <p>Weather: {data.weather[0].description}</p>
        </div>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};

export default App;
