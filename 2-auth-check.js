// Problem 2: Middleware to check if user is authenticated

const express = require('express');
const app = express();

// Auth Check Middleware
const authCheck = (req, res, next) => {
    // Check if 'loggedin' query parameter is 'true'
    // Example: /dashboard?loggedin=true
    if (req.query.loggedin === 'true') {
        // User is logged in, continue
        next();
    } else {
        // User not logged in, send error
        res.json({ message: 'Please login first!' });
    }
};

// Public route - no auth needed
app.get('/', (req, res) => {
    res.send('Welcome! This is public page');
});

// Protected route - auth needed
app.get('/dashboard', authCheck, (req, res) => {
    res.send('Welcome to Dashboard! You are logged in.');
});

// Another protected route
app.get('/profile', authCheck, (req, res) => {
    res.send('Your Profile Page');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Public: http://localhost:3000/');
    console.log('Protected: http://localhost:3000/dashboard?loggedin=true');
});
