// src/components/layout/Header.js

import React, { useState } from "react";

const Header = ({ onLogout, toggleSidebar, user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <header className="h-16 bg-blue-600 text-white flex items-center justify-between px-4 relative">
      {/* Hamburger Icon */}
      <button onClick={toggleSidebar} className="text-xl">
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {user && (
        <div className="flex items-center relative">
          <img
            src={user.photo}
            alt={user.name}
            className="w-8 h-8 rounded-full mr-2 cursor-pointer"
            onClick={handleProfileClick} // Click to toggle dropdown
          />
          <span className="cursor-pointer" onClick={handleProfileClick}>
            {user.name}
          </span>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-10">
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={onLogout}
              >
                Logout
              </button>
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  // Handle edit profile logic here
                  console.log("Edit profile clicked");
                }}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
