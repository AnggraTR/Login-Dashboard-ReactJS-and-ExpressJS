import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';

const App = () => {
  const location = useLocation();

  const showNavbarAndHeader = location.pathname !== '/login'; // Don't show Navbar and Header on the login page

  return (
    <div className="flex flex-col h-screen">
      {showNavbarAndHeader && <Header />} {/* Conditionally show the Header */}
      <div className="flex flex-1">
        {showNavbarAndHeader && <Navbar />} {/* Conditionally show the Navbar */}
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
