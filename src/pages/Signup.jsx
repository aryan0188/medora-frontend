import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSignup = (event) => {
    event.preventDefault();
    
    // Validation checks
    if (email === '' || password === '' || confirmPassword === '') {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulate an API call to create a new user
    setError('');
    alert('Account created successfully!');
    history.push('/login'); // Redirect to the login page after successful signup
  };

  return (
    <div className="page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
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
        <div className="input-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
