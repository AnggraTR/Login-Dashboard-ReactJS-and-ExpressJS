import React from 'react';
import Layout from './layout/Layout';

function Dashboard({ onLogout }) {
  return  <Layout onLogout={onLogout}/>;
}

export default Dashboard;
