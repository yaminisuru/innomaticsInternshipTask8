// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
    <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/students">Student List</Link>
        <Link to="/add-student">Register Student</Link>
    </nav>
);

export default Navigation;
