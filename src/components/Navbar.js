import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/students">Student List</Link></li>
                <li><Link to="/register">Register Student</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
