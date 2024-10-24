// src/LoginForm.js
import React, { useState } from "react";

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message

        try {
            const response = await fetch('http://localhost:3003/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Pastikan ini benar
            });

            if (!response.ok) {
                throw new Error('Username atau Password salah!');
            }

            const data = await response.json();
            onLogin(data.user); // Panggil fungsi onLogin jika login berhasil
            alert('Login berhasil!'); // Tampilkan pesan sukses
        } catch (err) {
            setError(err.message); // Set error message
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            {error && <p className="text-red-500">{error}</p>} {/* Tampilkan pesan error */}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
                type="submit"
                className="bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-600 transition duration-200"
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm;