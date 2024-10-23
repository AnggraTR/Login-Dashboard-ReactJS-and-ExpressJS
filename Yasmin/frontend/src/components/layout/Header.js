import React from "react";
import LogoutButton from "../LogoutButton";

function Header({ onLogout }) {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">WST</h1>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span className="mr-4">johndoe</span>
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
        </div>
        <LogoutButton onLogout={onLogout} />
      </div>
    </header>
  );
}

export default Header;
