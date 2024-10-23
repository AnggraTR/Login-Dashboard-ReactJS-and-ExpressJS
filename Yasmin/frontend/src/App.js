import React, { useState } from "react";

import LoginPage from "./pages/LoginPage";

import DashboardPage from "./pages/DashboardPage";

import { login } from "./api/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleLogin = async (username, password) => {
    try {
      const response = await login({ username, password });
      if (response.ok) {
        setIsLoggedIn(true);
        setErrorMessage("");
      } else {
        setErrorMessage("Login gagal. Silakan coba lagi.")
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("Terjadi kesalahan. Silakan coba lagi."); 
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <DashboardPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} errorMessage={errorMessage} />
      )}
    </div>
  );
}

export default App;
