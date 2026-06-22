// Problem 4: Middleware to count total requests

const express = require('express');
const app = express();

// Variable to store request count
let requestCount = 0;

// Counter Middleware
const counter = (req, res, next) => {
    // Increase count
    requestCount++;

    // Log the count
    console.log(`Total requests: ${requestCount}`);

    // Continue to route
    next();
};

// Use counter for all routes
app.use(counter);

// Sample routes
app.get('/', (req, res) => {
    res.send(`Home Page - Total requests so far: ${requestCount}`);
});

app.get('/about', (req, res) => {
    res.send(`About Page - Total requests so far: ${requestCount}`);
});

// Route to see count
app.get('/count', (req, res) => {
    res.json({ totalRequests: requestCount });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Visit different pages and see count increase');
});
