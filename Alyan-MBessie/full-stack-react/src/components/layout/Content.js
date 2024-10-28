import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home"; // Adjusted path for Home component
import Dashboard from "../../pages/Dashboard";
import Schedule from "../../pages/Schedule"; // Adjusted path for Schedule component
import Patients from "../../pages/Patients"; // Adjusted path for Patients component
import Doctors from "../../pages/Doctors"; // Adjusted path for Doctors component
import Settings from "../../pages/Settings"; // Adjusted path for Settings component

function MainContent() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default MainContent;
