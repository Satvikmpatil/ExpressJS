// Problem 5: Delete book by ISBN using DELETE

const express = require('express');
const app = express();

// Array of books
let books = [
    { isbn: '111', title: 'JavaScript Basics', author: 'John' },
    { isbn: '222', title: 'Node.js Guide', author: 'Sara' },
    { isbn: '333', title: 'Express.js Tutorial', author: 'Mike' }
];

// DELETE route to remove book by ISBN
app.delete('/book/:isbn', (req, res) => {
    // Get isbn from URL
    const isbn = req.params.isbn;

    // Find book index
    const index = books.findIndex(b => b.isbn === isbn);

    // If found, delete it
    if (index !== -1) {
        const deleted = books.splice(index, 1);
        res.json({ message: 'Book deleted!', book: deleted[0] });
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
    console.log('DELETE to /book/111 to remove book');
});
