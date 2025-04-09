import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    
    // Validation checks
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    // Simulate an API call to validate the user (this can be connected to your backend)
    if (email === 'test@example.com' && password === 'password') {
      setError('');
      history.push('/user-dashboard'); // Redirect to user dashboard on successful login
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="page">
      <h2>Login to Medora</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
