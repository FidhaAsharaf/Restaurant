const express = require('express');
const { createReservation, getAllReservations,getReservationsByEmail, updateReservationStatus, deleteReservation } = require('../controllers/reserve-controller.js');
const router = express.Router();

router.post('/create', createReservation);
router.get('/all', getAllReservations);
router.put('/update', updateReservationStatus); // Route to update reservation status
router.delete('/:reservationId', deleteReservation); // Route to delete reservation
router.get('/', getReservationsByEmail); 

module.exports = router;
