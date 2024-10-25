import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBars,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar dimulai terbuka

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk menampilkan teks hanya jika sidebar terbuka
  const renderText = (text) =>
    isOpen && <span className="ml-4 text-sm">{text}</span>; // Mengubah ukuran teks

  return (
    <div
      className={`bg-orange-400 text-black h-full transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } flex flex-col`}
    >
      {/* Tombol Burger */}
      <div
        className={`flex ${
          isOpen ? "justify-start p-4 mt-5" : "justify-center mt-5"
        } transition-all`}
      >
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Logo dan Teks Menu */}
      {/* Logo dan Teks Menu */}
      <div className={`flex flex-col items-center p-4`}>
        {isOpen && (
          <div
            className={`bg-white text-orange-500 border border-orange-500 rounded-lg p-2`}
          >
            <span className="text-lg font-bold ">Toko Orange</span>
          </div>
        )}
        {isOpen && <span className="text-lg mt-3">Menu</span>}
      </div>

      {/* Konten Menu */}
      <ul
        className={`flex flex-col flex-grow ${
          isOpen ? "items-start px-4" : "items-center justify-center"
        }`}
      >
        {[
          { icon: <FaTachometerAlt className="text-2xl" />, text: "Dashboard" },
          { icon: <FaUser className="text-2xl" />, text: "Profil" },
          { icon: <FaCog className="text-2xl" />, text: "Pengaturan" },
          { icon: <FaSignOutAlt className="text-2xl" />, text: "Logout" },
        ].map(({ icon, text }, index) => (
          <li
            key={index}
            className="w-full hover:bg-red-50 transition-colors duration-200 rounded-md"
          >
            <button
              onClick={() => console.log(`${text} clicked`)}
              className="flex items-center p-4 w-full"
            >
              {icon}
              {renderText(text)}
            </button>
          </li>
        ))}
      </ul>

      {/* Penutup Bawah Sidebar */}
      <div className="p-4 flex-grow" />
    </div>
  );
}

export default Sidebar;
