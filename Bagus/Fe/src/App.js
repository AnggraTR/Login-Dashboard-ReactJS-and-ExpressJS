import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageA from './pages/Page_A';
import PageB from './pages/Page_B';
import Login from './pages/login_Pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page-a" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
        {/* Tambahkan rute default jika diperlukan */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;