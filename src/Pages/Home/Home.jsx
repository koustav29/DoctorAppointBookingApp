import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // react-icons library required
import OtpValidation from "../../components/OtpValidation/OtpValidation";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import { FaSearch } from "react-icons/fa";
import AppointmentForm from "../../components/AppointmentForm/AppointmentForm";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };
  return (
    <>
      {/* <div className="top-menu">
        <div className="logo">LOGO</div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-button">
            <FaSearch />
          </button>
        </div>
        <nav className="nav-items">
          <Link to="/home"></Link>

          <a href="about">About Us</a>
          <a href="listing">Services</a>
          <a href="labs">Labs</a>
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
      </div> */}
      <Navbar />
      <div className="background-image">
        {/* <div className="search-section">
          <input
            type="text"
            className="location-input"
            placeholder="Enter location..."
          />
          
          <input type="date" className="appointment-date" />
          <button className="search-button">Search</button>
        </div> */}
      </div>

      <AppointmentForm />
      <br></br>
      <br></br>

      <center>
        {" "}
        <h1>Recent Lab List</h1>
      </center>
      <Slider />
      <br></br>
      <br></br>
      <br></br>
      {/* <OtpValidation mobileNumber={"1234567890"} /> */}
      <Testimonial />
      <br></br>
      <br></br>
      <br></br>
      <Slider />
    </>
  );
};

export default Home;
