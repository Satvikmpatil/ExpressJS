// Problem 1: Add a new student using POST method

const express = require('express');
const app = express();

// Middleware to read JSON data from request body
app.use(express.json());

// Array to store students
const students = [
    { id: 1, name: 'Rahul', age: 20 }
];

// POST route to add new student
app.post('/student', (req, res) => {
    // Get data from request body
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    // Add to array
    students.push(newStudent);

    // Send response
    res.json({ message: 'Student added!', student: newStudent });
});

// GET route to see all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('POST to /student with JSON: { "name": "Priya", "age": 21 }');
});
