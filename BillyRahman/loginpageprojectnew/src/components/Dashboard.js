// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Hapus token dari localStorage
        localStorage.removeItem('token');
        // Arahkan pengguna kembali ke halaman login
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <button 
                    onClick={handleLogout} 
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                >
                    Logout
                </button>
            </header>
            <main className="flex flex-col items-center justify-center w-full mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <h2 className="text-xl font-semibold">Card 1</h2>
                        <p className="mt-2 text-gray-600">Deskripsi untuk Card 1.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <h2 className="text-xl font-semibold">Card 2</h2>
                        <p className="mt-2 text-gray-600">Deskripsi untuk Card 2.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <h2 className="text-xl font-semibold">Card 3</h2>
                        <p className="mt-2 text-gray-600">Deskripsi untuk Card 3.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <h2 className="text-xl font-semibold">Card 4</h2>
                        <p className="mt-2 text-gray-600">Deskripsi untuk Card 4.</p>
                    </div>
                    {/* Tambahkan lebih banyak kartu sesuai kebutuhan */}
                </div>
            </main>
            <footer className="w-full shadow-md p-4 mt-6 framer-ryeb ">
                <div className='ssvariant'>
                <p className="text-center text-gray-600">© 2024 Bbloome. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Dashboard;
