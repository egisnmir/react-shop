const express = require('express');
const cors = require('cors');
const products = require('./mockData/Products.js');
const cartContent = require('./mockData/CartContent.js');

const app = express();
app.use(cors());

app.listen(3001, () => {
    console.log('Server running at 3001');
});

app.get('/products', (req, res) => {
    res.json(products.list);
});

app.get('/cart-content', (req, res) => {
    res.json(cartContent.initialCartContent);
});
