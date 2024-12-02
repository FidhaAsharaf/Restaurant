// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const menuRoutes = require('./routes/menu-route.js');
const contactRoutes = require('./routes/contact-route.js');
const reserveRoutes = require('./routes/reserve-route.js');
const userRoutes = require('./routes/user-route.js');
const orderRoutes = require('./routes/order-route.js');  // Import order routes
const adminRoutes = require('./routes/admin-route');


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/contact', contactRoutes);
app.use('/api/reserve', reserveRoutes);
app.use('/uploads', express.static('uploads'));

// Use other routes
app.use('/api/menu', menuRoutes);
app.use('/api/user', userRoutes);
app.use('/api/order', orderRoutes);  // Use order routes
app.use('/api/admin', adminRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
