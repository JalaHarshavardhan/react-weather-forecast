import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import Map from "./components/maps/map";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";
import Navbar from "./components/web-page-format/navbar/Navbar";
import Footer from "./components/web-page-format/footer/footer";
import AboutPage from "./components/web-page-format/AboutPage/AboutPage";
import UsagePage from "./components/web-page-format/UsagePage/UsagePage";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [latitude, setLatitude] = useState(null); // State to store latitude
  const [longitude, setLongitude] = useState(null); // State to store longitude

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    setLatitude(lat); // Update latitude state
    setLongitude(lon); // Update longitude state

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const [currentWeatherResponse, forecastResponse] = await Promise.all(
          responses.map((response) => response.json())
        );

        setCurrentWeather({
          city: searchData.label,
          main: { temp: currentWeatherResponse.main.temp },
          ...currentWeatherResponse,
        });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch(console.log);
  };

  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Search onSearchChange={handleOnSearchChange} />
            <div className="weatherMap">
              <div className="weather_">
                {currentWeather && (
                  <CurrentWeather
                    city={currentWeather.city}
                    temperature={currentWeather.main.temp}
                    data={currentWeather}
                  />
                )}
              </div>
              <div className="_map">
                {/* Render the Map component and pass latitude and longitude as props */}
                {latitude && longitude && currentWeather && (
                  <Map latitude={latitude} longitude={longitude} />
                )}
              </div>
            </div>
            {forecast && <Forecast data={forecast} />}
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/usage">
            <UsagePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
