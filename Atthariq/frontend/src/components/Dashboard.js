import React from "react";
import LogoutButton from "./LogoutButton";


function Dashboard({ onLogout }) {
    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-purple-700 mb-6">Selamat datang di Dashboard</h1>

            {/* Kartu Informasi */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-purple-600">Total Pengguna</h2>
                    <p className="text-2xl font-bold">1,250</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-purple-600">Total Penjualan</h2>
                    <p className="text-2xl font-bold">$15,000</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-purple-600">Total Produk</h2>
                    <p className="text-2xl font-bold">300</p>
                </div>
            </div>

            {/* Grafik Sederhana */}
            <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-semibold text-purple-600 mb-4">Statistik Penjualan</h2>
                <div className="h-40 bg-purple-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-600">Grafik Penjualan (Sementara)</p>
                </div>
            </div>

            {/* Tombol Logout */}
            <LogoutButton onLogout={onLogout} />
        </div>
    );
}

export default Dashboard;
