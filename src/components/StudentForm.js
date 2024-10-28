// src/components/StudentForm.js
import React, { useState, useContext, useEffect } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';
import './StudentForm.css';

const StudentForm = ({ existingStudent }) => {
    const { addStudent, updateStudent } = useContext(StudentContext);
    const [student, setStudent] = useState({
        name: '', email: '', age: '', class: '', address: '', phone: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (existingStudent) setStudent(existingStudent);
    }, [existingStudent]);

    const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        existingStudent ? updateStudent(student) : addStudent(student);
        navigate("/students");
    };

    return (
        <div className="form-container">
            <h2 className="form-heading">{existingStudent ? 'Edit Student' : 'Register Student'}</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" value={student.name} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" value={student.email} onChange={handleChange} required />
                <input name="age" placeholder="Age" value={student.age} onChange={handleChange} required />
                <input name="class" placeholder="Class" value={student.class} onChange={handleChange} required />
                <input name="address" placeholder="Address" value={student.address} onChange={handleChange} required />
                <input name="phone" placeholder="Phone" value={student.phone} onChange={handleChange} required />
                <button type="submit">{existingStudent ? 'Update' : 'Register'}</button>
            </form>
        </div>
    );
};

export default StudentForm;
