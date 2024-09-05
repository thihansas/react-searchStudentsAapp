import React from 'react';

const StudentList = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>GPA</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.gender}</td>
            <td>{student.age}</td>
            <td>{student.gpa}</td>
            <td>{student.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentList;
