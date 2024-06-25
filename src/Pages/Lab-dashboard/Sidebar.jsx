import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-100 p-5 h-screen">
      <div className="flex flex-col items-center">
        <img
          src="path/to/profile-image"
          alt="Profile"
          className="rounded-full w-16 h-16 mb-4"
        />
        <h2 className="text-lg font-bold">LAB 1 2 3</h2>
      </div>
      <nav className="mt-10">
        <ul>
          <li className="flex items-center p-2 my-2 bg-teal-200 rounded-lg">
            <span className="material-icons mr-2">dashboard</span>
            <span>Dashboard</span>
          </li>
          <li className="flex items-center p-2 my-2">
            <span className="material-icons mr-2">science</span>
            <span>Labs</span>
          </li>
          <li className="flex items-center p-2 my-2">
            <span className="material-icons mr-2">support_agent</span>
            <span>Support</span>
          </li>
          <li className="flex items-center p-2 my-2">
            <span className="material-icons mr-2">people</span>
            <span>Patients</span>
          </li>
          <li className="flex items-center p-2 my-2">
            <span className="material-icons mr-2">book_online</span>
            <span>Bookings</span>
          </li>
          <li className="flex items-center p-2 my-2">
            <span className="material-icons mr-2">group</span>
            <span>Team</span>
          </li>
          <li className="flex items-center p-2 my-2">
            <span className="material-icons mr-2">calendar_today</span>
            <span>Calendar</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
