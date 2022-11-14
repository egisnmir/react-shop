const express = require('express');
const cors = require('cors');
const products = require('./mockData/Products.js');

const app = express();
app.use(cors());

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.listen(3001, () => {
    console.log('Server running at 3001');
});

app.get('/products', (req, res) => {
    res.json(products.list);
});

app.get('/default-cart-content', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Granny Smith Apple',
            price: 0.49,
            amount: randomIntBetween(1, 10)
        },
        {
            id: 4,
            name: 'Brocolli',
            price: 0.49,
            amount: randomIntBetween(1, 10)
        }
    ]);
});
