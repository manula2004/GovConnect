import MedicalStaffDashboard from "./pages/MedicalStaff/Dashboard";
import MedicalStaffMedicalReports from "./pages/MedicalStaff/MedicalReports";
import MedicalStaffAppointmentRequests from "./pages/MedicalStaff/AppointmentRequests";
import LicenseStaffDashboard from "./pages/LicenseStaff/Dashboard";
import AppointmentRequests from "./pages/LicenseStaff/AppointmentRequests";
import PassportStaffDashboard from "./pages/PassportStaff/Dashboard";
import AdminDashboard from "./pages/Auth/adminDashboard";
import TrackPassport from "./pages/Citizen/passport/TrackPassport";
import MedicalAppointment from "./pages/Citizen/medical/appointment";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthChoice from "./pages/Auth/AuthChoice";
import Login from "./pages/Auth/Login";
import ResetPasswordPage from "./pages/Auth/ResetPassword"; // Corrected import
import LanguageSelection from "./pages/Common/LanguageSelection";
import Dashboard from "./pages/Citizen/Dashboard";
import PassportServices from "./pages/Citizen/passport/PassportServices";
import LicenseServices from "./pages/Citizen/license/LicenseServices";
import MedicalServices from "./pages/Citizen/medical/MedicalServices";
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
  <Route path="/citizen/passport/track" element={<TrackPassport />} />
  <Route path="/citizen/license" element={<LicenseServices />} />
  <Route path="/citizen/medical" element={<MedicalServices />} />
  <Route path="/citizen/medical/appointment" element={<MedicalAppointment />} />
        <Route path="/auth/adminDashboard" element={<AdminDashboard />} />
  <Route path="/MedicalStaff/dashboard" element={<MedicalStaffDashboard />} />
  <Route path="/MedicalStaff/MedicalReports" element={<MedicalStaffMedicalReports />} />
  <Route path="/MedicalStaff/AppointmentRequests" element={<MedicalStaffAppointmentRequests />} />
  <Route path="/LicenseStaff/dashboard" element={<LicenseStaffDashboard />} />
  <Route path="/LicenseStaff/appointment" element={<AppointmentRequests />} />
  <Route path="/PassportStaff/dashboard" element={<PassportStaffDashboard />} />
      </Routes>
    </Router>
  );
}