import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithIcon from "../../components/InputWithIcon";
import PasswordInput from "../../components/PasswordInput";
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import EmailIcon from '../../assets/Icons/EmailIcon';

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
    
    // Authentication logic would go here
    console.log('Login attempt with:', { email, password });
    navigate('/citizen/dashboard');
  };

  return (
    <div className="container login-container">
      <div className="login-card">
        <Logo width="180px" className="login-logo" />
        
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please enter your details</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="login-error">{error}</div>}
          
          <InputWithIcon
            icon={EmailIcon}
            iconPosition="left"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error && !email ? 'error' : ''}
          />
          
          <PasswordInput
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error && !password ? 'error' : ''}
          />
          
          <div className="login-actions">
            <Button type="submit" className="btn-primary">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;