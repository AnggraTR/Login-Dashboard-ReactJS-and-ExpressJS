import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Pastikan Anda mengimpor komponen Dashboard
import Register from './components/Register'; // Impor komponen Register

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Rute untuk Dashboard */}
        <Route path="/register" element={<Register />} /> {/* Rute untuk Register */}
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect ke halaman login */}
        {/* Rute lainnya */}
      </Routes>
    </Router>
  );
};

export default App;
