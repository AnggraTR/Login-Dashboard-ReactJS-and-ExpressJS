import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Sidebar from "./Sidebar";

function Layout({ onLogout }) {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-purple-300">
            <Header onLogout={onLogout} />
            <div className="flex flex-1">
                <Sidebar />
                <Content />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
