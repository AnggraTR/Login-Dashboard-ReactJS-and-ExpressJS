import React from "react";
import Layout from '../components/layout/Layout';


function DashboardPage({ onLogout }) {
    return (
        <Layout onLogout={onLogout} />
    );
}

export default DashboardPage;
