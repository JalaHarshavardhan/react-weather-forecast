import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="listItems">
          <ul style={{listStyleType: "none", }}>
            <Link to="/" className="linkItems">
              <li>Weather App</li>
            </Link>
            <li>
              <Link to="/about" className="linkItems">About this app</Link>
            </li>
            <li>
              <Link to="/usage" className="linkItems">Usage guide</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <hr /> */}
    </div>
  );
}

export default Navbar;
