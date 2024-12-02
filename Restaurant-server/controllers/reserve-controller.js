
const Reservation = require('../models/reserve-model.js');

// Controller to create a new reservation
exports.createReservation = async (req, res) => {
  try {
    const { numPeople, date, time, email } = req.body;

    if (!numPeople || !date || !time || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newReservation = new Reservation({
      numPeople,
      date,
      time,
      email,
    });

    await newReservation.save();
    res.status(201).json({ message: 'Reservation created successfully', reservation: newReservation });
  } catch (error) {
    res.status(400).json({ message: 'Error creating reservation', error: error.message });
  }
};

// You can add this if you want to get all reservations (if needed)
exports.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching reservations', error: error.message });
  }
};
exports.updateReservationStatus = async (req, res) => {
  const { reservationId, status } = req.body;

  try {
    const reservation = await Reservation.findByIdAndUpdate(
      reservationId,
      { status },
      { new: true }
    );

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json({ message: 'Reservation status updated', reservation });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete reservation
exports.deleteReservation = async (req, res) => {
  const { reservationId } = req.params;

  try {
    const reservation = await Reservation.findByIdAndDelete(reservationId);

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    res.status(200).json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
// Controller to get reservations by email
exports.getReservationsByEmail = async (req, res) => {
  try {
    const { email } = req.query; // Get email from query parameters

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Fetch reservations for the specific email
    const reservations = await Reservation.find({ email });

    if (!reservations.length) {
      return res.status(404).json({ message: 'No reservations found for this user' });
    }

    res.status(200).json(reservations); // Return found reservations
  } catch (error) {
    res.status(400).json({ message: 'Error fetching reservations', error: error.message });
  }
};
