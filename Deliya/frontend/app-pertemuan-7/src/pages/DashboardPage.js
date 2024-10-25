import React from "react";
import Dashboard from "../components/Dashboard";

function DashboardPage({ onLogout }) {
  return (
    <div>
      <Dashboard onLogout={onLogout} />
    </div>
  );
}

export default DashboardPage;
