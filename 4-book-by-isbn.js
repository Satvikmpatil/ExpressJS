// Problem 4: Get book details by ISBN number

const express = require('express');
const app = express();

// Sample data - array of books
const books = [
    { isbn: '111', title: 'JavaScript Basics', author: 'John' },
    { isbn: '222', title: 'Node.js Guide', author: 'Sara' },
    { isbn: '333', title: 'Express.js Tutorial', author: 'Mike' }
];

// GET route with ISBN parameter
app.get('/book/:isbn', (req, res) => {
    // Get isbn from URL
    const isbn = req.params.isbn;

    // Find book with matching isbn
    const book = books.find(b => b.isbn === isbn);

    // Send response
    if (book) {
        res.json(book);
    } else {
        res.json({ message: 'Book not found' });
    }
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Try: http://localhost:3000/book/111');
});
