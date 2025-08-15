import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthChoice from "./pages/Auth/AuthChoice";
import Login from "./pages/Auth/Login";
import ResetPasswordPage from "./pages/Auth/ResetPassword"; // Corrected import
import LanguageSelection from "./pages/Common/LanguageSelection";
import Dashboard from "./pages/Citizen/Dashboard";
import EnterCodePage from "./pages/Auth/EnterResetCode";
import SetNewPasswordPage from "./pages/Auth/SetNewPasswordPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LanguageSelection />} />
        <Route path="/auth-choice" element={<AuthChoice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/set-new-password" element={<SetNewPasswordPage />} />
        <Route path="/enter-reset-code" element={<EnterCodePage />} />
        <Route path="/citizen/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}