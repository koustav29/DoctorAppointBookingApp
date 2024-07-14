import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Dashboard = () => <div>Dashboard Content</div>;
// const Labs = () => <div>Labs Content</div>;
// const Support = () => <div>Support Content</div>;
// const Patients = () => <div>Patients Content</div>;
const Bookings = () => <div>Bookings Content</div>;
// const Team = () => <div>Team Content</div>;
// const Calendar = () => <div>Calendar Content</div>;

const Sidebar = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ width: "200px", background: "#f0f0f0", padding: "10px" }}>
          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <img
              src="path/to/logo.png"
              alt="Logo"
              style={{ width: "50px", borderRadius: "50%" }}
            />
            <h3>LAB 1 2 3</h3>
          </div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {/* <li>
              <Link to="/labs">Labs</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
            <li>
              <Link to="/patients">Patients</Link>
            </li> */}
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            {/* <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar</Link>
            </li> */}
          </ul>
        </div>

        <div style={{ marginLeft: "20px", padding: "10px", flex: 1 }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/labs" element={<Labs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/patients" element={<Patients />} /> */}
            <Route path="/bookings" element={<Bookings />} />
            {/* <Route path="/team" element={<Team />} />
            <Route path="/calendar" element={<Calendar />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
