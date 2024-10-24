import React from 'react';
import { FaHome, FaUser, FaCog, FaBars, FaSignOutAlt, FaTachometerAlt, FaUserCircle } from 'react-icons/fa'; // Import user icon

function Sidebar({ isOpen, setIsOpen }) { // Accept setIsOpen as a prop
    return (
        <div className={`bg-indigo-800 text-white h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} flex flex-col`}> {/* Changed background color to match header */}
            {/* Hamburger Button */}
            <div className={`flex ${isOpen ? 'justify-start p-4 mt-5' : 'justify-center mt-5'} transition-all`}>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center">
                    <FaBars className="text-2xl" />
                </button>
            </div>

            {/* User Logo */}
            <div className="flex justify-center mt-4">
                <FaUserCircle className="text-4xl" /> {/* User icon */}
            </div>

            {/* Menu Items */}
            <ul className={`flex flex-col flex-grow ${isOpen ? 'items-start px-4' : 'items-center justify-center'}`}>
                {[ 
                    { icon: <FaTachometerAlt className="text-2xl" />, text: 'Dashboard' },
                    { icon: <FaHome className="text-2xl" />, text: 'Beranda' },
                    { icon: <FaUser className="text-2xl" />, text: 'Profil' },
                    { icon: <FaCog className="text-2xl" />, text: 'Pengaturan' },
                    { icon: <FaSignOutAlt className="text-2xl" />, text: 'Logout' }
                ].map(({ icon, text }, index) => (
                    <li key={index} className="w-full hover:bg-indigo-700 transition-colors duration-200 rounded-md"> {/* Changed hover color to match theme */}
                        <button onClick={() => console.log(`${text} clicked`)} className="flex items-center p-4 w-full">
                            {icon}
                            {isOpen && <span className="ml-4 text-sm">{text}</span>}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Bottom Spacer */}
            <div className="p-4 flex-grow" />
        </div>
    );
}

export default Sidebar;