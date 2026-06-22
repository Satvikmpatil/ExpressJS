// Problem 1: Delete student by ID using DELETE

const express = require('express');
const app = express();

// Array of students
let students = [
    { id: 1, name: 'Rahul', age: 20 },
    { id: 2, name: 'Priya', age: 21 },
    { id: 3, name: 'Amit', age: 19 }
];

// DELETE route to remove student
app.delete('/student/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find student index
    const index = students.findIndex(s => s.id === id);

    // If found, delete it
    if (index !== -1) {
        const deleted = students.splice(index, 1);
        res.json({ message: 'Student deleted!', student: deleted[0] });
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
    console.log('DELETE to /student/1 to remove student');
});
