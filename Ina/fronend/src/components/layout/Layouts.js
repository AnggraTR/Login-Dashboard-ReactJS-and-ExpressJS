import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Layout({ onLogout }) {
    const [isMenuOpen, setIsMenuOpen] = useState(true); // Set initial state to true for sidebar

    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-1">
                <Sidebar isOpen={isMenuOpen} /> {/* Sidebar on the left */}
                <div className="flex flex-col flex-1">
                    <Header onLogout={onLogout} setIsMenuOpen={setIsMenuOpen} />
                    <main className="flex-1 p-4">
                        <Content />
                    </main>
                    <Footer /> {/* Footer at the bottom */}
                </div>
            </div>
        </div>
    );
}

export default Layout;