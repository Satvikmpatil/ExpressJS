// Problem 3: Display all products from an array

const express = require('express');
const app = express();

// Sample data - array of products
const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 }
];

// GET route to display all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Try: http://localhost:3000/products');
});
