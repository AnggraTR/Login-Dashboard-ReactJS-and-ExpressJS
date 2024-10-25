// src/components/Header.js
import React, { useState } from "react";

function Header({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Nama Aplikasi */}
          <h1 className="text-2xl font-bold">Toko Orange</h1>

          {/* Info Admin dengan Dropdown Logout */}
          <div className="relative flex items-center">
            <span className="mr-3 text-lg font-medium">Deliya Syafa</span>
            <img
              src="https://www.svgrepo.com/show/9682/avatar.svg" // Avatar Admin
              alt="Admin Avatar"
              className="h-10 w-10 rounded-full border border-gray-300 shadow-sm cursor-pointer"
              onClick={toggleMenu} // Toggle dropdown saat klik avatar
            />
            {/* Menu Dropdown */}
            {isOpen && (
              <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    onLogout();
                    closeMenu();
                  }}
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
