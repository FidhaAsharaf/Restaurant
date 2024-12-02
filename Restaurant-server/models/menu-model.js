// menu-model.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  dishName: { type: String, required: true },
  image: { type: String, required: true }, // Store image path
  price: { type: Number, required: true },
  foodType: { type: String, required: true },
  caption: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Menu', menuSchema);
