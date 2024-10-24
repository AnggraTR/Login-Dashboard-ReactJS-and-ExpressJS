import React from "react";
import LogoutButton from "../LogoutButton";

function Header({ onLogout }) {
    return (
        <div className="bg-indigo-900 text-white p-4 flex justify-between items-center">
            {/* Logo atau Nama Aplikasi di Kiri */}
            <h1 className="text-2xl font-bold"></h1>

            {/* Nama, Ikon, dan Tombol Logout di Kanan */}
            <div className="flex items-center">
                {/* Nama */}
                <span className="mr-2 text-lg font-semibold">Ina</span>
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-5">
                    <span className="text-white font-bold">A</span> {/* Initials or icon */}
                </div>
                {/* Tombol Logout */}
                <LogoutButton onLogout={onLogout} />
            </div>
        </div>
    );
}

export default Header;