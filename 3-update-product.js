// Problem 3: Update product price using PUT

const express = require('express');
const app = express();

// Middleware to read JSON data
app.use(express.json());

// Array of products
const products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 }
];

// PUT route to update product price
app.put('/product/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find product
    const product = products.find(p => p.id === id);

    // If found, update price
    if (product) {
        product.price = req.body.price;
        res.json({ message: 'Price updated!', product: product });
    } else {
        res.json({ message: 'Product not found' });
    }
});

// GET route to see all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('PUT to /product/1 with JSON: { "price": 45000 }');
});
