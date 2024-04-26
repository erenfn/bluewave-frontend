import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import './styles/LoginPage.css';
import { login, signup } from './api/requests';
import { useNavigate  } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate ();
  const [res, setRes] = useState({
    status: 500,
    text: 'Not Updated'
  });
  
  const handleLogin = (name, password) => {
    const credentials = { name, password };
    login(credentials, setRes)
    .then(response => {
      if (response.status === 200) {
        navigate('/app')
      }
    });
    console.log(res)
  };

  const handleSignup = (name, password) => {
    const userInfo = { name, password };
    signup(userInfo, setRes).then(response => {
      if (response.status === 200) {
        navigate('/app')
      }
    });
    console.log(res)
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>{'Login / Signup'}</h2>
        <LoginForm onLogin={handleLogin} onSignup={handleSignup} />
      </div>
    </div>
  );
}

export default LoginPage;
