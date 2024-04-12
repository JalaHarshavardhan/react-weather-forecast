import React from "react";
import "./UsagePage.css";

function UsagePage() {
  return (
    <div className="usagepage">
      <h1 style={{ textAlign: "center" }}>Welcome to the Weather App!</h1>
      <h2 className="descUsage">
        <p>
          This weather app allows you to check the current weather and forecast
          for any city worldwide.
        </p>
        <p>Here's how you can use it:</p>
      </h2>

      <h3>Searching for a City</h3>
      <ol>
        <li>To get started, use the search bar at the top of the page.</li>
        <li>
          Enter the name of the city you want to check the weather for, and the
          app will provide suggestions based on your input.
        </li>
        <li>
          Once you've selected a city from the dropdown list, the app will
          display the current weather conditions and a forecast for the next 7
          days.
        </li>
      </ol>
      <h3>Viewing Current Weather</h3>
      <ol>
        <li>
          After searching for a city, you'll see the current weather information
          displayed on the screen.
        </li>
        <li>
          This includes the city name, temperature, weather description, wind
          speed, humidity, and pressure.
        </li>
        <li>
          You'll also see an icon representing the current weather conditions.
        </li>
      </ol>

      <h3>Viewing Forecast</h3>
      <ol>
        <li>
          Beneath the current weather information, you'll find the forecast for
          the next 7 days.
        </li>
        <li>
          Each day is represented as an accordion item that you can expand to
          see more details such as maximum and minimum temperatures, pressure,
          humidity, wind speed, and more.
        </li>
      </ol>

      <h3>Navigation</h3>

      <p>
        At the top of the page, you'll find a navigation bar with links to
        different sections of the app:
      </p>
      <ul>
        <li>
          <strong>Home:</strong> Returns you to the main page where you can
          search for cities and view weather information.
        </li>
        <li>
          <strong>About:</strong> Provides information about the app and its
          purpose.
        </li>
        <li>
          <strong>Usage:</strong> Offers guidance on how to use the app
          effectively (you're currently reading this section).
        </li>
      </ul>

      <h3>About Page</h3>
      <p>
        If you're curious about the app and want to learn more, you can visit
        the About page. Here, you'll find details about the app's development,
        its creators, and any additional information deemed relevant.
      </p>

      <h3>Usage Page</h3>
      <p>
        This page (the one you're currently on) offers a detailed guide on how
        to use the app. It provides step-by-step instructions on searching for
        cities, viewing current weather, checking the forecast, and navigating
        through different sections of the app.
      </p>

      <h3>Footer</h3>
      <p>
        Finally, at the bottom of the page, you'll find a footer section
        containing additional links, legal information, or any other relevant
        details.
      </p>

      <p>
        That's it! You're now ready to explore the Weather App and stay informed
        about weather conditions worldwide.
      </p>
    </div>
  );
}

export default UsagePage;
