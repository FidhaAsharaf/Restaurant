const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    dishName: { type: String, required: true },
    price: { type: Number, required: true },
    userEmail: { type: String, required: true },
    action: { type: String, enum: ['approved', 'rejected', 'pending'], default: 'pending' },
  },
  { timestamps: true }  // This will automatically handle createdAt and updatedAt
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;