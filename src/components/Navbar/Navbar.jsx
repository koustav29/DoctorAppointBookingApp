// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation

const Navbar = () => {
  return (
    <>
      <div className="top-menu">
        <div className="logo">LOGO</div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <nav className="nav-items">
          <a href="/">Home</a>
          <a href="about">About Us</a>
          <a href="listing">Services</a>
          <a href="labs">Labs</a>
          <a href="news">News</a>
          <a href="contact">Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
