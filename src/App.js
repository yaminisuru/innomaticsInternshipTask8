// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import EditStudent from './components/EditStudent';
import Navigation from './components/Navigation';
import './App.css';

function App() {
    return (
        <StudentProvider>
            <Router>
                <Navigation />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/students" element={<StudentList />} />
                        <Route path="/add-student" element={<StudentForm />} />
                        <Route path="/edit-student/:id" element={<EditStudent />} />
                        <Route path="/student/:id" element={<StudentDetails />} />
                    </Routes>
                </div>
            </Router>
        </StudentProvider>
    );
}

export default App;
