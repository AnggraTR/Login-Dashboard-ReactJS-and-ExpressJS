import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaClipboard } from 'react-icons/fa';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <h2 className="text-2xl font-bold p-6">Sidebar</h2>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <Link
              to="/page-a"
              className={`flex items-center px-6 py-3 hover:bg-gray-700 transition-colors ${
                location.pathname === '/page-a' ? 'bg-gray-700 text-purple-400' : ''
              }`}
            >
              <FaHome className="mr-3 text-lg" />
              <span>Page A</span>
            </Link>
          </li>
          <li>
            <Link
              to="/page-b"
              className={`flex items-center px-6 py-3 hover:bg-gray-700 transition-colors ${
                location.pathname === '/page-b' ? 'bg-gray-700 text-blue-400' : ''
              }`}
            >
              <FaClipboard className="mr-3 text-lg" />
              <span>Page B</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
