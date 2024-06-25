import React from "react";
import Sidebar from "./Sidebar.jsx";
import MainSection from "./MainSection.jsx";
import StatsSection from "./StatsSection.jsx";
import AppointmentsSection from "./AppointmentsSection.jsx";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-4/5 p-5">
        {/* <MainSection /> */}
        <StatsSection />
        <AppointmentsSection />
      </div>
    </div>
  );
};

export default Dashboard;
