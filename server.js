//a code example of Express code that defines a route for handling GET requests to the /orders endpoint

const express = require('express');
const app = express();

app.get('/orders', (req, res) => {
  // Get all orders from the database
  const orders = [
    { id: 1, customerName: 'John Doe', orderItems: ['product1', 'product2'] },
    { id: 2, customerName: 'Jane Doe', orderItems: ['product3', 'product4'] }
  ];

  // Send a JSON response with the orders
  res.json(orders);
});

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});