import React from 'react';
import logo from '../logo.svg'

const Header = () => {
  return (
    <header className="bg-[#23272ff2] p-4 shadow-md text-white flex items-center">
      <img src={logo} alt="Logo" className="h-8 w-8 mr-2" /> {/* Add logo */}
      <h1 className="text-lg font-bold">My Dashboard</h1>
    </header>
  );
}

export default Header;
