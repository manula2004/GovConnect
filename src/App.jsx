import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthChoice from "./pages/Auth/AuthChoice.jsx";
import LanguageSelection from "./pages/Common/LanguageSelection.jsx";
import Dashboard from "./pages/Citizen/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguageSelection />} />
        <Route path="/auth-choice" element={<AuthChoice />} />
        <Route path="/citizen/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}