import React from "react";

function Sidebar() {
    return (
        <div className="bg-purple-800 text-white w-64 p-5">
            <h2 className="text-xl font-bold mb-5">Menu</h2>
            <ul>
                <li className="mb-4 flex items-center hover:text-purple-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <a href="#">Dashboard</a>
                </li>
                <li className="mb-4 flex items-center hover:text-purple-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <a href="#">Profile</a>
                </li>
                <li className="mb-4 flex items-center hover:text-purple-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <a href="#">Settings</a>
                </li>
                <li className="mb-4 flex items-center hover:text-purple-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <a href="#">Help</a>
                </li>
                <li className="mb-4 flex items-center hover:text-purple-300">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                    <a href="#">Logout</a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
