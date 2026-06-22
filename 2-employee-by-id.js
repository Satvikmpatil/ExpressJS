// Problem 2: Get employee details by ID from URL

const express = require('express');
const app = express();

// Sample data - array of employees
const employees = [
    { id: 1, name: 'John', salary: 50000 },
    { id: 2, name: 'Sara', salary: 60000 },
    { id: 3, name: 'Mike', salary: 55000 }
];

// GET route with URL parameter :id
app.get('/employee/:id', (req, res) => {
    // Get id from URL and convert to number
    const id = parseInt(req.params.id);

    // Find employee with matching id
    const employee = employees.find(emp => emp.id === id);

    // If found, send employee data
    if (employee) {
        res.json(employee);
    } else {
        res.json({ message: 'Employee not found' });
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Try: http://localhost:3000/employee/1');
});
