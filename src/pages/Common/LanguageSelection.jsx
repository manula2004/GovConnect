import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export default function LanguageSelection() {
  const navigate = useNavigate();

  const handleLanguageSelect = () => {
    navigate("/auth-choice");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Select Your Language</h1>
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Button label="සිංහල" onClick={handleLanguageSelect} />
        <Button label="English" onClick={handleLanguageSelect} />
        <Button label="தமிழ்" onClick={handleLanguageSelect} />
      </div>
    </div>
  );
}
