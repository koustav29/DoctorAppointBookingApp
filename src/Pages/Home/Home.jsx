import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // react-icons library required
import OtpValidation from "../../components/OtpValidation/OtpValidation";
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  return (
    <>
      <div className="top-menu">
        <div className="logo">LOGO</div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <nav className="nav-items">
          <a href="/">Home</a>
          <a href="about">About Us</a>
          <a href="listing">Services</a>
          <a href="details">Labs</a>
          <a href="news">News</a>
          <a href="contact">Contact</a>
        </nav>
        <div className="profile" onClick={toggleProfileMenu}>
          <FaUserCircle size={28} />
          {profileMenuOpen && (
            <div className="profile-dropdown">
              <a href="login">Login</a>
              <a href="signup">Sign Up</a>
              <a href="edit-profile">Edit Profile</a>
            </div>
          )}
        </div>
      </div>
      <div className="background-image">
        <div className="search-section">
          <input
            type="text"
            className="location-input"
            placeholder="Enter location..."
          />
          <input type="date" className="appointment-date" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <Slider />
      {/* <OtpValidation mobileNumber={"1234567890"} /> */}
    </>
  );
};

export default Home;
