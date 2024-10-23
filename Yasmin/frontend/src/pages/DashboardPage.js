import React from "react";

import Dashboard from "../components/Dashboards";

function DashboardPage({ onLogout }) {
  return <Dashboard onLogout={onLogout} />;
}

export default DashboardPage;
