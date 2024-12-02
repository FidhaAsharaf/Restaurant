const express = require('express');
const { signUp, login, getAllUsers, deleteUser } = require('../controllers/user-controller.js');
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);

// Route to get all users
router.get('/all', getAllUsers);

// Route to delete a user by ID
router.delete('/:userId', deleteUser);

module.exports = router;
