import React from 'react';

const StudentList = ({ students }) => {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
};

export default StudentList;
