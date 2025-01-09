const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error details:', {
      message: error.message,
      code: error.code,
      uri: process.env.MONGODB_URI?.replace(
        /mongodb\+srv:\/\/([^:]+):([^@]+)@/,
        'mongodb+srv://[USERNAME]:[HIDDEN]@'
      )
    });
    process.exit(1);
  }
};

module.exports = connectDB;