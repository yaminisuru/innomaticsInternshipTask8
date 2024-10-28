// src/components/Dashboard.js
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const { students } = useContext(StudentContext);
    const studentCount = students.length;

    // Calculate the number of students in each class
    const classData = [
        { name: "10th Grade", value: students.filter(s => s.class === "10th Grade").length },
        { name: "11th Grade", value: students.filter(s => s.class === "11th Grade").length },
        { name: "12th Grade", value: students.filter(s => s.class === "12th Grade").length }
    ];

    const COLORS = ['#4a90e2', '#50e3c2', '#f5a623'];

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <p className="dashboard-stat">Total Students: {studentCount}</p>
            
            <div className="chart-container">
                <h3>Student Distribution by Class</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        data={classData}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {classData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;
