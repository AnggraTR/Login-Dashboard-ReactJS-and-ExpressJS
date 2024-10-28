import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate(); // For redirecting to dashboard after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }), // Send email and password to the server
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token to localStorage
        localStorage.setItem('token', data.token);
        
        // Redirect to the dashboard
        navigate('/');
      } else {
        // Set error message if login fails
        setError(data.message);
      }
    } catch (err) {
      // Handle any other errors (like network issues)
      console.error('Login failed:', err);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form 
        className="w-full max-w-md bg-white shadow-md rounded px-8 py-6" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter your email" 
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Enter your password" 
            required 
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
