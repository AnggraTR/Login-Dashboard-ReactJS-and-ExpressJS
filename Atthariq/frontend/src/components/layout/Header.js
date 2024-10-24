import React from "react";
import LogoutButton from "../LogoutButton";

function Header({ onLogout }) {
    return (
        <div className="bg-purple-700 text-white p-4 flex justify-between items-center">
            {/* Logo atau Nama Aplikasi di Kiri */}
            <h1 className="text-2xl font-bold">Q-Nest</h1>

            {/* Nama, Ikon, dan Tombol Logout di Kanan */}
            <div className="flex items-center">
                {/* Nama */}
                <span className="mr-2 text-lg font-semibold">Atthariq</span>
                {/* Ikon SVG */}
                <svg
                    enableBackground="new -27 24 100 100"
                    height="40px"
                    viewBox="-27 24 100 100"
                    width="40px"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-5"
                >
                    <g>
                        <g>
                            <circle cx="23" cy="74" fill="#F5EEE5" r="50" />
                            <path
                                d="M38,99.9l27.9,7.7c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8c1.3-3.1,3.9-5.5,7.1-6.6L8,99.9V85h30V99.9z"
                                fill="#E6C19C"
                            />
                            <path
                                d="M23,82C10.3,82,0,89.4,0,98.5S10.3,115,23,115s23-7.4,23-16.5S35.7,82,23,82z M23,111c-10.5,0-19-6-19-13.5S12.5,84,23,84s19,6,19,13.5S33.5,111,23,111z"
                                fill="#D98C21"
                            />
                        </g>
                    </g>
                </svg>
                {/* Tombol Logout */}
                <LogoutButton onLogout={onLogout} />
            </div>
        </div>
    );
}

export default Header;
