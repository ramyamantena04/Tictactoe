const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/products', (req, res) => {
    // Sample product data
    const products = [
        {
            id: 1,
            name: "Classic White T-Shirt",
            price: 29.99,
            category: "T-Shirts",
            image: "images/white-tshirt.jpg"
        },
        {
            id: 2,
            name: "Blue Denim Jeans",
            price: 59.99,
            category: "Jeans",
            image: "images/blue-jeans.jpg"
        },
        {
            id: 3,
            name: "Black Hoodie",
            price: 49.99,
            category: "Hoodies",
            image: "images/black-hoodie.jpg"
        }
    ];
    res.json(products);
});

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 