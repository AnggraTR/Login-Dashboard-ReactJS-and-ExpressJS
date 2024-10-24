import React, { useState } from 'react'; // Import React dan useState
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Router
import Login from './components/Login'; // Import Login
import Register from './components/Register'; // Import Register
import DashboardPage from './pages/Dashboardpage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk login

    const handleLogin = () => {
        setIsLoggedIn(true); // Set state isLoggedIn menjadi true
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Set state isLoggedIn menjadi false
    };

    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path="/" element={isLoggedIn ? <DashboardPage onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} /> {/* Render berdasarkan status login */}
                    <Route path="/register" element={<Register />} /> {/* Render Register component */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;