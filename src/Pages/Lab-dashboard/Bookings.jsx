// Dashboard.js
import React from "react";
import Sidebar from "./Sidebar";
import "./Bookings.css"; // Make sure to create appropriate CSS

const Bookings = () => {
  return (
    <div className="dashboard">
      <div className="content">
        <div className="lab-details">
          <div className="profile">
            <img
              src="path_to_lab_image.png"
              alt="Lab"
              className="profile-img"
            />
            <p>LAB 1 2 3</p>
          </div>
          <div className="details">
            <p>Name: Lab Name Detailed</p>
            <p>Date of Joining: 20 Apr 2023</p>
            <p>Lab Owner Name: Owner Name</p>
            <p>Contact Number: +91 99999 99999</p>
            <p>Emergency Contact Number: +91 98765 98765</p>
            <p>Email Address: vishakha345@gmail.com</p>
          </div>
        </div>
        <div className="bookings">
          <div className="tabs">
            <button className="active">Bookings Log</button>
            <button>In / Out Track</button>
            <button>Missed Out</button>
          </div>
          <div className="bookings-log">
            {["Waiting", "Waiting", "Waiting", "Declined", "Confirmed"].map(
              (status, index) => (
                <div className="booking" key={index}>
                  <div className="patient-info">
                    <img
                      src="path_to_patient_image.png"
                      alt="Patient"
                      className="patient-img"
                    />
                    <div>
                      <p>Patient Name</p>
                      <p>Test name</p>
                    </div>
                  </div>
                  <p>Status: {status}</p>
                  <p>12:30</p>
                  <div className="actions">
                    {status === "Waiting" && (
                      <>
                        <button className="accept">Accept</button>
                        <button className="decline">Decline</button>
                      </>
                    )}
                    <button className="view-details">View Details</button>
                  </div>
                </div>
              )
            )}
          </div>
          <button className="export-data">Export Data</button>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
