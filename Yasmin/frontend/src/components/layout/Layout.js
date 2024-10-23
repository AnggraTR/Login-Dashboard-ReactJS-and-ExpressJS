import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";
import Contents from "./Contents";
import Footer from "./Footer";

function Layout({ onLogout }) {
  return (
    <div>
      <Header onLogout={onLogout} />
      <div className="flex flex-grow">
        <Sidebar />
        <Contents />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
