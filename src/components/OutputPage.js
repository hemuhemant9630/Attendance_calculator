import React, { useState } from 'react';
import './PandaTheme.css';

const OutputPage = ({ results, onModify, onLogout }) => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  // Filter results based on the search term
  const filteredResults = results.filter((result) =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="output-container">
      <header className="output-header">
        <h1 className="gaming-panda">Attendance Results</h1>
        {/* Search Bar */}
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by subject name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <div className="results-grid">
        {filteredResults.map((result, index) => (
          <div key={index} className="subject-card">
            <h3 className="subject-title">{result.name}</h3>
            <p>📉 Absent Classes: <span>{result.absentClasses}</span></p>
            <p>📊 Current Attendance: <span>{result.attendancePercentage}%</span></p>
            <p>📅 Classes You Can Still Leave: <span>{result.leaveableClasses}</span></p>
          </div>
        ))}
        {filteredResults.length === 0 && (
          <p className="no-results-message">No subjects found for your search.</p>
        )}
      </div>

      <footer className="output-footer">
        <button className="btn-primary" onClick={onModify}>
          ✏ Modify Inputs
        </button>
        <button className="btn-secondary" onClick={onLogout}>
          🔒 Logout
        </button>
      </footer>
    </div>
  );
};

export default OutputPage;
