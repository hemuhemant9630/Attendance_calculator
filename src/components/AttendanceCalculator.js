import React, { useState } from 'react';
import './PandaTheme.css';

const AttendanceCalculator = ({ onCalculate }) => {
  const initialSubjects = [
    { name: 'CN', totalClassesScheduled: 61, classesHappened: 0, classesPresent: 0 },
    { name: 'OS', totalClassesScheduled: 52, classesHappened: 0, classesPresent: 0 },
    { name: 'ML', totalClassesScheduled: 49, classesHappened: 0, classesPresent: 0 },
    { name: 'Automata', totalClassesScheduled: 38, classesHappened: 0, classesPresent: 0 },
    { name: 'COA', totalClassesScheduled: 62, classesHappened: 0, classesPresent: 0 },
  ];

  const [subjects, setSubjects] = useState(initialSubjects);

  const handleInputChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = Number(value);
    setSubjects(updatedSubjects);
  };

  const calculateAttendance = () => {
    const calculatedResults = subjects.map((subject) => {
      const absentClasses = subject.classesHappened - subject.classesPresent;
      const attendancePercentage =
        subject.classesHappened > 0
          ? (subject.classesPresent / subject.classesHappened) * 100
          : 0;

      const maxAbsencesAllowed = 0.25 * subject.totalClassesScheduled;
      const leaveableClasses = Math.max(
        0,
        Math.floor(maxAbsencesAllowed - absentClasses)
      );

      return {
        name: subject.name,
        absentClasses,
        attendancePercentage: attendancePercentage.toFixed(2),
        leaveableClasses,
      };
    });

    onCalculate(calculatedResults);
  };

  return (
    <div className="background-container">
      <div className="calculator-container">
        <h1 className="gaming-panda">Attendance Calculator</h1>
        <div className="calculator-form">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-form">
              <h3>{subject.name}</h3>
              <p>Total Classes Scheduled: {subject.totalClassesScheduled}</p>
              <label>
                Classes Happened Till Date:
                <input
                  type="number"
                  value={subject.classesHappened}
                  onChange={(e) =>
                    handleInputChange(index, 'classesHappened', e.target.value)
                  }
                />
              </label>
              <label>
                Classes Present Till Date:
                <input
                  type="number"
                  value={subject.classesPresent}
                  onChange={(e) =>
                    handleInputChange(index, 'classesPresent', e.target.value)
                  }
                />
              </label>
            </div>
          ))}
          <button onClick={calculateAttendance}>Calculate</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalculator;
