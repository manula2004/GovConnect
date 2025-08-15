import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithIcon from "../../components/InputWithIcon";
import PasswordInput from "../../components/PasswordInput";
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import EmailIcon from '../../assets/Icons/EmailIcon';
import BackIcon from '../../assets/Icons/BackIcon'; // you'll need to create/import this

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    console.log('Login attempt with:', { email, password });
    navigate('/citizen/dashboard');
  };

  return (
    <div className="container login-container">
      {/* Back arrow */}
      <div className="login-back" onClick={() => navigate(-1)}>
        <img src={BackIcon} alt="Back" />
      </div>
        {/* Logo */}
        <Logo width="250px" className="login-logo" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}

          <InputWithIcon
            icon={EmailIcon}
            iconPosition="right"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error && !email ? 'error' : ''}
          />

          <PasswordInput
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error && !password ? 'error' : ''}
          />

          {/* Forgot password */}
          <div className="login-forgot">
            Forgot Password?{' '}
            <span
              className="login-reset-link"
              onClick={() => navigate('/forgot-password')}
            >
              Reset now
            </span>
          </div>

          {/* Login button */}
          <div className="login-actions">
            <Button type="submit" className="btn-primary">
              Login
            </Button>
          </div>
        </form>
      
    </div>
  );
};

export default LoginPage;
