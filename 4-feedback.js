// Problem 4: Customer feedback submission API

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array to store feedback
const feedbacks = [];

// POST route to submit feedback
app.post('/feedback', (req, res) => {
    // Create new feedback
    const newFeedback = {
        id: feedbacks.length + 1,
        customerName: req.body.customerName,
        message: req.body.message,
        date: new Date().toLocaleDateString()
    };

    // Add to array
    feedbacks.push(newFeedback);

    // Send response
    res.json({ message: 'Feedback received!', feedback: newFeedback });
});

// GET route to see all feedbacks
app.get('/feedbacks', (req, res) => {
    res.json(feedbacks);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('POST to /feedback with JSON:');
    console.log('{ "customerName": "Rahul", "message": "Great service!" }');
});
