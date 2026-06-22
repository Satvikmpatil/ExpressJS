// Problem 4: Update user email using PUT

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array of users
const users = [
    { id: 1, name: 'John', email: 'john@old.com' },
    { id: 2, name: 'Sara', email: 'sara@old.com' },
    { id: 3, name: 'Mike', email: 'mike@old.com' }
];

// PUT route to update email
app.put('/user/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find user
    const user = users.find(u => u.id === id);

    // If found, update email
    if (user) {
        user.email = req.body.email;
        res.json({ message: 'Email updated!', user: user });
    } else {
        res.json({ message: 'User not found' });
    }
});

// GET route to see all users
app.get('/users', (req, res) => {
    res.json(users);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('PUT to /user/1 with JSON: { "email": "john@new.com" }');
});
