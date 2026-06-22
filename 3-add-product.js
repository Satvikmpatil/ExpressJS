// Problem 3: Add a new product using POST

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array to store products
const products = [
    { id: 1, name: 'Laptop', price: 50000 }
];

// POST route to add product
app.post('/product', (req, res) => {
    // Create new product
    const newProduct = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    // Add to array
    products.push(newProduct);

    // Send response
    res.json({ message: 'Product added!', product: newProduct });
});

// GET route to see all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('POST to /product with JSON: { "name": "Phone", "price": 20000 }');
});
