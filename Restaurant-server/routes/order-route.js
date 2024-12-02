// order-route.js
const express = require('express');
const { createOrder, getOrders, updateOrderStatus, deleteOrder } = require('../controllers/order-controller');
const router = express.Router();

// Create a new order
router.post('/create', createOrder);

// Get all orders
router.get('/', getOrders);

// Update order status (approved/rejected)
router.put('/update', updateOrderStatus);

// Delete an order
router.delete('/:orderId', deleteOrder);

module.exports = router;
