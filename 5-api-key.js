// Problem 5: Middleware to check API key in headers

const express = require('express');
const app = express();

// Valid API key (in real app, store securely)
const VALID_API_KEY = 'my-secret-key-123';

// API Key Middleware
const checkApiKey = (req, res, next) => {
    // Get API key from headers
    const apiKey = req.headers['x-api-key'];

    // Check if key matches
    if (apiKey === VALID_API_KEY) {
        // Valid key, continue
        next();
    } else {
        // Invalid key, send error
        res.json({ error: 'Invalid API key!' });
    }
};

// Public route
app.get('/', (req, res) => {
    res.send('Public page - no API key needed');
});

// Protected route - needs API key
app.get('/data', checkApiKey, (req, res) => {
    res.json({
        message: 'Access granted!',
        data: ['Item 1', 'Item 2', 'Item 3']
    });
});

// Another protected route
app.get('/secret', checkApiKey, (req, res) => {
    res.json({ secret: 'This is secret data!' });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('To access /data, add header: x-api-key: my-secret-key-123');
});
