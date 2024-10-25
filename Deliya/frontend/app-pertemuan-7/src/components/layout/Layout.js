import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Layout({ onLogout }) {
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex flex-col flex-grow">
                {/* Header */}
                <Header onLogout={onLogout} />

                {/* Content */}
                <div className="flex-grow p-4 overflow-y-auto">
                    <Content />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
