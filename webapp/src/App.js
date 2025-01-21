import React, { useState } from 'react';
import StudentList from './components/Student';
import './App.css';

const App = () => {
  const [students, setStudents] = useState(['Alice', 'Bob', 'Charlie']);
  const [newStudent, setNewStudent] = useState('');

  const addStudent = () => {
    if (newStudent.trim()) {
      setStudents([...students, newStudent]);
      setNewStudent('');
    }
  };

  return (
    <div className="app">
      <h1>Student Management</h1>
      <StudentList students={students} />
      <div className="form">
        <input
          type="text"
          placeholder="Add a new student"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
    </div>
  );
};

export default App;
