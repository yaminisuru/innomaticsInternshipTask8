// src/components/StudentList.js
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import './StudentList.css';

const StudentList = () => {
    const { students, deleteStudent } = useContext(StudentContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterClass, setFilterClass] = useState('');

    const filteredStudents = students
        .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(student => (filterClass ? student.class === filterClass : true));

    return (
        <div className="student-list-container">
            <h2>Student List</h2>
            <div className="search-filter-container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)}>
                    <option value="">All Classes</option>
                    <option value="10th Grade">10th Grade</option>
                    <option value="11th Grade">11th Grade</option>
                    <option value="12th Grade">12th Grade</option>
                </select>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Class</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.class}</td>
                                <td className="actions">
                                    <Link to={`/student/${student.id}`}>View</Link>
                                    <Link to={`/edit-student/${student.id}`}>Edit</Link>
                                    <button onClick={() => deleteStudent(student.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
