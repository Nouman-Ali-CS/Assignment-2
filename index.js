require('dotenv').config();
const express = require('express');
const connectDB = require('./db'); // Import the connectDB function
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB(); // Call the function to connect to the database

// Routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
