import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthChoice from "./pages/Auth/AuthChoice";
import Login from "./pages/Auth/Login";
import ResetPasswordPage from "./pages/Auth/ResetPassword"; // Corrected import
import LanguageSelection from "./pages/Common/LanguageSelection";
import Dashboard from "./pages/Citizen/Dashboard";
import PassportServices from "./pages/Citizen/PassportServices";
import LicenseServices from "./pages/Citizen/LicenseServices";
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
  <Route path="/citizen/passport" element={<PassportServices />} />
  <Route path="/citizen/passport/apply" element={<div>Apply for New Passport (placeholder)</div>} />
  <Route path="/citizen/passport/track" element={<div>Track Application System (placeholder)</div>} />
  <Route path="/citizen/license" element={<LicenseServices />} />
      </Routes>
    </Router>
  );
}