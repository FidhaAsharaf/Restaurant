const Admin = require('../models/admin-model');
const bcrypt = require('bcryptjs'); // Use bcrypt for password hashing

// Controller for admin login
exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If login successful, respond with a success message
    res.status(200).json({ message: 'Admin login successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
