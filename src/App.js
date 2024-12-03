import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import AttendanceCalculator from './components/AttendanceCalculator';
import OutputPage from './components/OutputPage';

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [results, setResults] = useState(null);

  const handleLogin = () => {
    setUserLoggedIn(true);
  };

  const handleResults = (calculatedResults) => {
    setResults(calculatedResults);
  };

  const resetCalculator = () => {
    setResults(null);
  };

  const logout = () => {
    setUserLoggedIn(false);
    setResults(null);
  };

  return (
    <div className="app-container">
      {!userLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : results === null ? (
        <AttendanceCalculator onCalculate={handleResults} />
      ) : (
        <OutputPage results={results} onModify={resetCalculator} onLogout={logout} />
      )}
    </div>
  );
};

export default App;
