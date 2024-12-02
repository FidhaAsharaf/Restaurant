const express = require('express');
const { adminLogin } = require('../controllers/admin-controller');
const router = express.Router();

// Route for admin login
router.post('/login', adminLogin);

module.exports = router;