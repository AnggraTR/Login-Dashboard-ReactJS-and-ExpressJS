// src/components/layout/Sidebar.js

import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineSchedule,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-[rgb(17,24,38)] text-white shadow-lg ${
        isVisible ? "block" : "hidden md:block"
      }`}
    >
      {/* Logo and Hamburger Icon */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-600">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-yellow-500">
          HaloDoc..!
        </h1>
        {/* Hamburger Icon */}
        <button onClick={toggleSidebar} className="md:hidden">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      <nav className="mt-4">
        <ul className="space-y-4">
          {/* Main Menu Items */}
          <li>
            <Link
              className="flex items-center text-lg font-medium hover:bg-blue-700 px-4 py-2 rounded transition duration-200"
              to="/dashboard"
            >
              <AiOutlineDashboard className="mr-2" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-lg font-medium hover:bg-blue-700 px-4 py-2 rounded transition duration-200"
              to="/doctors"
            >
              <FaUserMd className="mr-2" />
              Doctors
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-lg font-medium hover:bg-blue-700 px-4 py-2 rounded transition duration-200"
              to="/patients"
            >
              <AiOutlineUser className="mr-2" />
              Patients
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-lg font-medium hover:bg-blue-700 px-4 py-2 rounded transition duration-200"
              to="/schedule"
            >
              <AiOutlineSchedule className="mr-2" />
              Schedule
            </Link>
          </li>

          {/* Divider Line */}
          <hr className="border-gray-600 mx-4" />

          {/* Settings Menu Item */}
          <li>
            <Link
              className="flex items-center text-lg font-medium hover:bg-red-700 px-4 py-2 rounded transition duration-200"
              to="/settings"
            >
              <AiOutlineSetting className="mr-2" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
