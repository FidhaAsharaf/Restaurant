const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { addMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } = require('../controllers/menu-controller');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Set unique filename
  },
});

const upload = multer({ storage });

// Routes
router.post('/add', upload.single('image'), addMenuItem);
router.get('/view', getMenuItems);
router.put('/update/:id', upload.single('image'), updateMenuItem); // Update route
router.delete('/delete/:id', deleteMenuItem);  // Check that this is defined

module.exports = router;
