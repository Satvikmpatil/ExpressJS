// Problem 4: Delete user by ID using DELETE

const express = require('express');
const app = express();

// Array of users
let users = [
    { id: 1, name: 'John', email: 'john@email.com' },
    { id: 2, name: 'Sara', email: 'sara@email.com' },
    { id: 3, name: 'Mike', email: 'mike@email.com' }
];

// DELETE route to remove user
app.delete('/user/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find user index
    const index = users.findIndex(u => u.id === id);

    // If found, delete it
    if (index !== -1) {
        const deleted = users.splice(index, 1);
        res.json({ message: 'User deleted!', user: deleted[0] });
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
    console.log('DELETE to /user/1 to remove user');
});
