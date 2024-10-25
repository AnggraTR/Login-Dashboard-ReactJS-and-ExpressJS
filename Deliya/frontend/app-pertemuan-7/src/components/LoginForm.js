import React, { useState, useEffect } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  // Load username and password from localStorage if "Remember me" is checked
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedRememberMe = localStorage.getItem("rememberMe") === "true";
    if (storedRememberMe) {
      setUsername(storedUsername || "");
      setPassword(storedPassword || "");
      setRememberMe(true);
    }
  }, []);

  const bubbleStyle = (size, top, left) => ({
    position: 'absolute',
    width: size,
    height: size,
    borderRadius: '50%',
    background: 'rgba(255, 165, 0, 0.3)',
    top,
    left,
  });

  const bubbles = [
    { size: '150px', top: '10%', left: '5%' },
    { size: '100px', top: '60%', left: '15%' },
    { size: '120px', top: '20%', right: '15%' },
    { size: '80px', top: '70%', right: '10%' },
    { size: '90px', top: '40%', left: '50%' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem("username", username);
          localStorage.setItem("password", password);
          localStorage.setItem("rememberMe", "true");
        } else {
          localStorage.removeItem("username");
          localStorage.removeItem("password");
          localStorage.setItem("rememberMe", "false");
        }
        onLogin();
      } else {
        setError(data.message || "Username atau password salah!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Terjadi kesalahan. Silakan coba lagi nanti.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-orange-100 relative overflow-hidden">
      {bubbles.map((bubble, index) => (
        <div 
          key={index} 
          style={bubbleStyle(bubble.size, bubble.top, bubble.left)}
        ></div>
      ))}
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm relative z-10">
        <h2 className="text-center text-2xl font-bold text-orange-600 mb-6">
          Log in
        </h2>
        
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-orange-500 focus:outline-none"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
