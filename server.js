require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./db'); // Import the connectDB function
const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

// Log environment variables for debugging
console.log('Environment Variables:', {
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET
});

// Connect to MongoDB
connectDB(); // Call the function to connect to the database

// Routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
