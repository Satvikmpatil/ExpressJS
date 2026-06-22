// Problem 3: Middleware to validate name and email in request body

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Validation Middleware
const validateBody = (req, res, next) => {
    // Check if name exists
    if (!req.body.name) {
        res.json({ error: 'Name is required!' });
        return;
    }

    // Check if email exists
    if (!req.body.email) {
        res.json({ error: 'Email is required!' });
        return;
    }

    // All fields present, continue
    next();
};

// POST route with validation
app.post('/register', validateBody, (req, res) => {
    res.json({
        message: 'Registration successful!',
        name: req.body.name,
        email: req.body.email
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('POST to /register with JSON:');
    console.log('{ "name": "John", "email": "john@email.com" }');
});
