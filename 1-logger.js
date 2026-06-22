// Problem 1: Middleware to log request method, URL, and date/time

const express = require('express');
const app = express();

// Logger Middleware - runs for every request
const logger = (req, res, next) => {
    // Get current date and time
    const now = new Date().toLocaleString();

    // Log the details
    console.log(`[${now}] ${req.method} ${req.url}`);

    // Call next() to continue to the route
    next();
};

// Use the middleware for all routes
app.use(logger);

// Sample routes
app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Try visiting different pages and check console logs');
});
