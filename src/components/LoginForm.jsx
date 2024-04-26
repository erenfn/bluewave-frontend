import React, { useState } from 'react';

const LoginForm = ({ onLogin, onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    onSignup(username, password);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="button-container">
        <button type="submit" onClick={handleLoginSubmit}>Login</button>
        <button type="submit" onClick={handleSignupSubmit}>Signup</button>
      </div>
    </form>
  );
};

export default LoginForm;
