import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="aboutpage">
      {/* <h1>About this app page</h1> */}
      <h2 className="descAbout">
        <p>
          This application is a live weather forecast web app built using React.
          It provides users with the current weather conditions and a 7-day
          forecast for a selected city.
        </p>
        <p>Here's a breakdown of its functionality and components:</p>
      </h2>
      <h3>Functionality:</h3>
      <ol>
        <li>
          <b>Search Functionality:</b>
          <p>
            <ul>
              <li>Users can search for a city using the search bar.</li>
              <li>
                Suggestions are provided based on user input, and upon selecting
                a city, the application fetches the current weather and forecast
                data for that city.
              </li>
            </ul>
          </p>
        </li>
        <li>
          <b>Weather Data Display:</b>
          <p>
            <ul>
              <li>
                The application displays the current weather conditions,
                including temperature, weather description, feels like
                temperature, wind speed, humidity, and pressure.{" "}
              </li>
              <li>
                It also displays a 7-day forecast with detailed weather
                information for each day.
              </li>
            </ul>
          </p>
        </li>
        <li>
          <b>Map Display:</b>
          <p>
            <ul>
              <li>
                Initially intended to show a Google Map with the selected city's
                location.
              </li>
              <li>
                Currently, it displays a world weather map showing temperature
                for the selected location
              </li>
            </ul>
          </p>
        </li>
      </ol>
      <h3>APIs Used:</h3>
      <ol>
        <li>
          <b>Open Weather API:</b>
          <p>
            <ul>
              <li>Used to fetch weather data for the selected city.</li>
              <li>
                The API provides current weather and forecast information.
              </li>
              <li>Link to the  <a href="https://openweathermap.org/" target="_blank">OpenWeatherApi</a></li>
            </ul>
          </p>
        </li>
        <li>
          <b>Geolocation API:</b>
          <p>
            <ul>
              <li>Used to fetch suggestions for cities based on user input.</li>
              <li>Link to <a href="https://rapidapi.com/wirefreethought/api/geodb-cities/" target="_blank">GeoLocationApi</a></li>
            </ul>
          </p>
        </li>
      </ol>
      <h3>Components:</h3>
      <ol>
        <li>
          <b> Navbar:</b>
          <p>
            <ul>
              <li>Provides navigation links for different pages of the app.</li>
            </ul>
          </p>
        </li>
        <li>
          <b> Footer:</b>
          <p>
            <ul>
              <li>Displays footer information.</li>
            </ul>
          </p>
        </li>
        <li>
          <b> Search:</b>
          <p>
            <ul>
              <li>
                Allows users to search for a city. It fetches suggestions as
                users type and provides options based on the input. It utilizes
                the react-select-async-paginate library for asynchronous data
                fetching.
              </li>
            </ul>
          </p>
        </li>
        <li>
          <b> CurrentWeather:</b>
          <p>
            <ul>
              <li>
                Displays the current weather conditions for the selected city.
                It shows details like temperature, weather description, feels
                like temperature, wind speed, humidity, and pressure.
              </li>
            </ul>
          </p>
        </li>
        <li>
          <b> Forecast:</b>
          <p>
            <ul>
              <li>
                Displays a 7-day forecast for the selected city. It shows the
                weather condition, maximum and minimum temperature, pressure,
                humidity, cloud cover, wind speed, and sea level for each day.
              </li>
            </ul>
          </p>
        </li>
        <li>
          <b> Map:</b>
          <p>
            <ul>
              <li>
                Displays a map with the location of the selected city. Initially
                intended to show a Google Map with the city's location, but
                currently displays a world weather map showing temperature for
                the selected location.
              </li>
            </ul>
          </p>
        </li>
      </ol>
      <h3>Pages:</h3>
      <ol>
        <li>
          <b> Home Page ("/"):</b>
          <p>
            <ul>
              <li>
                Displays the search bar, current weather conditions, and the map
                for the selected city. It also shows the 7-day forecast.
              </li>
            </ul>
          </p>
        </li>
        <li>
          <b> About Page ("/about"):</b>
          <p>
            <ul>
              <li>Provides information about the application.</li>
            </ul>
          </p>
        </li>
        <li>
          <b> Usage Page ("/usage"):</b>
          <p>
            <ul>
              <li>Provides information about how to use the application.</li>
            </ul>
          </p>
        </li>
      </ol>
    </div>
  );
}

export default AboutPage;
