import React, { useState } from 'react';
import './PandaTheme.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [signUpData, setSignUpData] = useState({
    username: '',
    password: '',
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const defaultUsers = [
      { username: 'user1', password: 'pass1' },
      { username: 'user2', password: 'pass2' },
      { username: 'user3', password: 'pass3' },
    ];

    const user = defaultUsers.find(
      (user) =>
        user.username === formData.username &&
        user.password === formData.password
    );

    if (user) {
      onLogin();
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${signUpData.username}! You are now signed up.`);
    setIsFlipped(false); // Flip back to login after signing up
  };

  return (
    <div className="login-page">
      <video id="background-video" autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/vid copy.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
        <div className="login-container">
          <form onSubmit={handleLoginSubmit} className="login-form">
            <h1>Attendance</h1>
            <h1>Calculator</h1>

            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Login</button>
            <button
              type="button"
              className="to-signup"
              onClick={() => setIsFlipped(true)}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="signup-container">
          <form onSubmit={handleSignUpSubmit} className="signup-form">
            <h1>Sign Up</h1>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={signUpData.username}
                onChange={handleSignUpChange}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                required
              />
            </label>
            <button type="submit">Sign Up</button>
            <button
              type="button"
              className="to-login"
              onClick={() => setIsFlipped(false)}
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;