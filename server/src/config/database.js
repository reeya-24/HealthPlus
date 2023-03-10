const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost:27017/testuser' || process.env.MONGO_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('MongoDB connected successfully!');
    } catch (err) {
      console.error('MongoDB connection error:', err);
    }
  };
  
  module.exports = connectDB;