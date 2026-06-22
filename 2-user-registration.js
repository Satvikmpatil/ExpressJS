// Problem 2: User registration API

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array to store users
const users = [];

// POST route for registration
app.post('/register', (req, res) => {
    // Get data from request body
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    // Add to array
    users.push(newUser);

    // Send response
    res.json({ message: 'Registration successful!', user: newUser });
});

// GET route to see all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('POST to /register with JSON:');
    console.log('{ "name": "John", "email": "john@email.com", "password": "123" }');
});
