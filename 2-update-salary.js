// Problem 2: Update employee salary using PUT

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array of employees
const employees = [
    { id: 1, name: 'John', salary: 50000 },
    { id: 2, name: 'Sara', salary: 60000 },
    { id: 3, name: 'Mike', salary: 55000 }
];

// PUT route to update salary
app.put('/employee/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find employee
    const employee = employees.find(e => e.id === id);

    // If found, update salary
    if (employee) {
        employee.salary = req.body.salary;
        res.json({ message: 'Salary updated!', employee: employee });
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
    console.log('PUT to /employee/1 with JSON: { "salary": 65000 }');
});
