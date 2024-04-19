const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending' // Initial status when a booking is created
  }
});

module.exports = mongoose.model('Booking', bookingSchema);

