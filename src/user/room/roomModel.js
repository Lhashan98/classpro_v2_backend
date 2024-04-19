const mongoose = require('mongoose');

// Define the schema for the room collection
const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startTime: {
    type: String, // Adjust the type according to your needs (e.g., Date)
    required: true
  },
  endTime: {
    type: String, // Adjust the type according to your needs (e.g., Date)
    required: true
  }
  // Add more fields as needed
});

// Create a model for the room collection
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
