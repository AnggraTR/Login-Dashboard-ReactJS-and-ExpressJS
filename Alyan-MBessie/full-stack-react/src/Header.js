import React from "react";
import LogoutButton from "./components/LogoutButton";

function Header({ onLogout }) {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Clinic App Dashboard</h1>
      <LogoutButton onLogout={onLogout} />
    </header>
  );
}

export default Header;
