// Problem 1: Update student marks using PUT

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array of students with marks
const students = [
    { id: 1, name: 'Rahul', marks: 75 },
    { id: 2, name: 'Priya', marks: 80 },
    { id: 3, name: 'Amit', marks: 70 }
];

// PUT route to update marks
app.put('/student/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find student
    const student = students.find(s => s.id === id);

    // If found, update marks
    if (student) {
        student.marks = req.body.marks;
        res.json({ message: 'Marks updated!', student: student });
    } else {
        res.json({ message: 'Student not found' });
    }
});

// GET route to see all students
app.get('/students', (req, res) => {
    res.json(students);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('PUT to /student/1 with JSON: { "marks": 90 }');
});
