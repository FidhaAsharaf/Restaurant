const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  numPeople: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, enum: ['approved', 'rejected', 'pending'], default: 'pending' }, // Add status field
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
