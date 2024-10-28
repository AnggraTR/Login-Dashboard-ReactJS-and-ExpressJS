// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ onLogout }) {
  return (
    <aside className="w-64 bg-gray-200 h-screen p-4">
      <nav>
        <ul>
          <li>
            <NavLink
              to="/home"
              exact
              activeClassName="font-bold"
              className="block py-2"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/schedule"
              activeClassName="font-bold"
              className="block py-2"
            >
              Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patients"
              activeClassName="font-bold"
              className="block py-2"
            >
              Patients
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              activeClassName="font-bold"
              className="block py-2"
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              activeClassName="font-bold"
              className="block py-2"
            >
              Settings
            </NavLink>
          </li>
          <li>
            <button onClick={onLogout} className="block py-2 text-red-600">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
