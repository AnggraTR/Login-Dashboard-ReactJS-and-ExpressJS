// src/App.js

import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import Layout from "./components/layout/Layout"; // Ensure this path is correct

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Add user state

  // Function to handle login with user data
  const handleLogin = (userData) => {
    setIsAuthenticated(true);
    setUser(userData); // Store user data
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null); // Clear user data on logout
  };

  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Routes>
          {/* Route to Login Page */}
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                  <LoginPage onLogin={handleLogin} />
                </div>
              )
            }
          />

          {/* Protected Routes for Dashboard and other pages */}
          <Route
            path="/*" // Catch-all for all routes
            element={
              isAuthenticated ? (
                <Layout onLogout={handleLogout} user={user}>
                  {/* Pass user to Layout */}
                  <Routes>
                    {/* Nested Routes under Layout */}
                    <Route path="/dashboard" element={<DashboardPage />} />
                    {/* Add more routes as needed */}
                  </Routes>
                </Layout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />

          {/* Default Route */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
