import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Content from "./Content";


const Layout = ({ onLogout, user }) => {
  // State to manage mobile sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogout={onLogout} toggleSidebar={toggleSidebar} user={user} />
      <div className="flex flex-grow flex-col md:flex-row">
        {/* Sidebar always rendered but position changes on mobile */}
        <Sidebar isVisible={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className={`flex-grow p-4 ${isSidebarOpen ? "md:ml-64" : "md:ml-64"}`}
        >
          {/* Main content area */}
          <Content />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
