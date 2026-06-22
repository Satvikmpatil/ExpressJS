// Problem 2: Delete employee by ID using DELETE

const express = require('express');
const app = express();

// Array of employees
let employees = [
    { id: 1, name: 'John', salary: 50000 },
    { id: 2, name: 'Sara', salary: 60000 },
    { id: 3, name: 'Mike', salary: 55000 }
];

// DELETE route to remove employee
app.delete('/employee/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find employee index
    const index = employees.findIndex(e => e.id === id);

    // If found, delete it
    if (index !== -1) {
        const deleted = employees.splice(index, 1);
        res.json({ message: 'Employee deleted!', employee: deleted[0] });
    } else {
        res.json({ message: 'Employee not found' });
    }
});

// GET route to see all employees
app.get('/employees', (req, res) => {
    res.json(employees);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('DELETE to /employee/1 to remove employee');
});
