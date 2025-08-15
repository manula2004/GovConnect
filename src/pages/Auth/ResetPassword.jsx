import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithIcon from "../../components/InputWithIcon";
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import EmailIcon from '../../assets/Icons/EmailIcon';
import BackIcon from '../../assets/Icons/BackIcon';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    console.log('Reset password request for:', { email });
    navigate('/reset-password-confirmation');
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "4rem",
        padding: "0 1rem",
        position: "relative"
      }}
    >
      {/* Back icon */}
      <div
        style={{
          position: "absolute",
          top: "-3rem",
          left: "1rem",
          cursor: "pointer",
          color: "#033EA1"
        }}
        onClick={() => navigate(-1)}
      >
        <BackIcon />
      </div>

      {/* Logo */}
      <Logo width="250px" />

      <h1
        style={{
          fontSize: "1.5rem",
          marginTop: "0.5rem",
          marginBottom: "1.5rem",
          color: "#1a202c"
        }}
      >
        Reset Your Password
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          width: "100%",
          maxWidth: "300px",
          margin: "0 auto"
        }}
      >
        {error && (
          <div
            style={{
              color: "#dc2626",
              fontSize: "0.9rem",
              textAlign: "center"
            }}
          >
            {error}
          </div>
        )}

        <InputWithIcon
          icon={EmailIcon}
          iconPosition="right"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Login button */}
        <Button
          label="Confirm"
          type="submit"
          style={{ width: "100%" }}
        />
      </form>
    </div>
  );
}