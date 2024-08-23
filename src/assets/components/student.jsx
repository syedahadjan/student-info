import React, { useState } from 'react';
import './StudentList.css'; 

const StudentList = () => {
  const [students, setStudents] = useState([
    
   
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    rollNo: '',
    fatherName: '',
  });

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.rollNo && newStudent.fatherName) {
      setStudents([...students, newStudent]);
      setNewStudent({ name: '', rollNo: '', fatherName: '' });
    }
  };

  const handleDeleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src="cat1.webp" alt="Logo" className="logo" />
      </div>
      <h1 className="title">Students List</h1>
      
      <div className="add-student-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rollNo"
          placeholder="Roll No"
          value={newStudent.rollNo}
          onChange={handleChange}
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father Name"
          value={newStudent.fatherName}
          onChange={handleChange}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Father Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.fatherName}</td>
              <td>
                <button onClick={() => handleDeleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
