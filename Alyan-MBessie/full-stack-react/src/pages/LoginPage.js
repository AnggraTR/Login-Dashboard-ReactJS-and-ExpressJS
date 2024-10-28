// src/pages/LoginPage.js

import React from "react";
import LoginForm from "../components/LoginForm";

function LoginPage({ onLogin }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Welcome Back!
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Please login to your account
      </p>
      <LoginForm onLogin={onLogin} />
      <div className="text-center mt-4">
        <a href="/forgot-password" className="text-blue-500 hover:underline">
          Forgot Password?
        </a>
      </div>
    </div>
  );
}

export default LoginPage;
