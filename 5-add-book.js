// Problem 5: Add book to library collection

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array to store books (library)
const library = [
    { isbn: '111', title: 'JavaScript Basics', author: 'John' }
];

// POST route to add book
app.post('/book', (req, res) => {
    // Create new book
    const newBook = {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author
    };

    // Add to library
    library.push(newBook);

    // Send response
    res.json({ message: 'Book added to library!', book: newBook });
});

// GET route to see all books
app.get('/books', (req, res) => {
    res.json(library);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('POST to /book with JSON:');
    console.log('{ "isbn": "222", "title": "Node.js Guide", "author": "Sara" }');
});
