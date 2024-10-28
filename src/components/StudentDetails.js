// src/components/StudentDetails.js
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import './StudentDetails.css';

const StudentDetails = () => {
    const { id } = useParams();
    const { students } = useContext(StudentContext);
    const student = students.find(s => s.id === parseInt(id));

    if (!student) return <p>Student not found</p>;

    return (
        <div className="details-container">
            <h2>{student.name}</h2>
            <p>Email: {student.email}</p>
            <p>Age: {student.age}</p>
            <p>Class: {student.class}</p>
            <p>Address: {student.address}</p>
            <p>Phone: {student.phone}</p>
            <Link to="/students" className="back-link">Back to Student List</Link>
        </div>
    );
};

export default StudentDetails;
