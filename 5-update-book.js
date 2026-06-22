// Problem 5: Update book details using PUT

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array of books
const books = [
    { isbn: '111', title: 'JavaScript Basics', author: 'John' },
    { isbn: '222', title: 'Node.js Guide', author: 'Sara' }
];

// PUT route to update book by ISBN
app.put('/book/:isbn', (req, res) => {
    // Get isbn from URL
    const isbn = req.params.isbn;

    // Find book
    const book = books.find(b => b.isbn === isbn);

    // If found, update details
    if (book) {
        book.title = req.body.title || book.title;
        book.author = req.body.author || book.author;
        res.json({ message: 'Book updated!', book: book });
    } else {
        res.json({ message: 'Book not found' });
    }
});

// GET route to see all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('PUT to /book/111 with JSON: { "title": "JS Advanced" }');
});
