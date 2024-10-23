import React from "react";

import LoginForm from "../components/LoginForm";

function LoginPage({ onLogin }) {
  const handleLogin = (username, password) => {
    onLogin(username, password);
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default LoginPage;
