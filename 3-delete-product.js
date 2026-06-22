// Problem 3: Delete product by ID using DELETE

const express = require('express');
const app = express();

// Array of products
let products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Phone', price: 20000 },
    { id: 3, name: 'Tablet', price: 30000 }
];

// DELETE route to remove product
app.delete('/product/:id', (req, res) => {
    // Get id from URL
    const id = parseInt(req.params.id);

    // Find product index
    const index = products.findIndex(p => p.id === id);

    // If found, delete it
    if (index !== -1) {
        const deleted = products.splice(index, 1);
        res.json({ message: 'Product deleted!', product: deleted[0] });
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
    console.log('DELETE to /product/1 to remove product');
});
