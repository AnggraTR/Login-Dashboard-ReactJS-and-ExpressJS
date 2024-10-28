import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = () => {
    // Clear user session (if applicable)
    console.log('Logging out...');

    localStorage.clear()
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <aside className="bg-gray-800 w-64 h-full shadow-lg text-white p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="/" className="hover:bg-gray-700 block p-2 rounded">Dashboard</a>
          </li>
          <li>
            <a href="/profile" className="hover:bg-gray-700 block p-2 rounded">Profile</a>
          </li>
          <li>
            <button 
              onClick={handleLogout} 
              className="hover:bg-gray-700 block p-2 rounded text-left w-full"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Navbar;
