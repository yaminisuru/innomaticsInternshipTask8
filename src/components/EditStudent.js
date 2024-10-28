// src/components/EditStudent.js
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';
import StudentForm from './StudentForm';
import './EditStudent.css';

const EditStudent = () => {
    const { id } = useParams();
    const { students } = useContext(StudentContext);
    const student = students.find((s) => s.id === parseInt(id));

    if (!student) return <p>Student not found</p>;

    return (
        <div className="edit-container">
            <Link to="/students" className="back-link">Back to Student List</Link>
            <h2 className="edit-heading">Edit Student Details</h2>
            <StudentForm existingStudent={student} />
        </div>
    );
};

export default EditStudent;
