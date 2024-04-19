const Booking = require('./bookingModel');
const Room = require('../room/roomModel'); // Corrected path


// Controller method to create a booking
exports.createBooking = async (req, res) => {
  try {
    const bookingData = req.body;

    // Check if bookingData contains necessary fields
    if (!bookingData.roomNumber || !bookingData.startTime || !bookingData.endTime) {
      return res.status(400).json({ message: 'Room number, start time, and end time are required' });
    }

    // Create the booking
    const newBooking = new Booking(bookingData);
    await newBooking.save();

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller method to get booking by room number
exports.getBookingByRoomNumber = async (req, res) => {
  try {
    const { roomNumber } = req.params;
    const booking = await Booking.find({ roomNumber });

    res.json(booking);
  } catch (error) {
    console.error('Error getting booking by room number:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller method to update a booking by room number
exports.updateBookingByRoomNumber = async (req, res) => {
  try {
    const { roomNumber } = req.params;
    const bookingData = req.body;

    // Update the booking
    const updatedBooking = await Booking.findOneAndUpdate({ roomNumber }, bookingData, { new: true });

    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({ message: 'Booking updated successfully', booking: updatedBooking });
  } catch (error) {
    console.error('Error updating booking by room number:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller method to delete a booking by room number
exports.deleteBookingByRoomNumber = async (req, res) => {
  try {
    const { roomNumber } = req.params;
    const deletedBooking = await Booking.findOneAndDelete({ roomNumber });

    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json({ message: 'Booking deleted successfully', booking: deletedBooking });
  } catch (error) {
    console.error('Error deleting booking by room number:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// booking/controller.js

exports.getAvailableRooms = async (req, res) => {
  try {
    // Implementation to check availability
    res.status(200).json({ message: 'Availability check successful' });
  } catch (error) {
    console.error('Error checking availability:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller method to get available rooms for a given time period
exports.getAvailableRooms = async (req, res) => {
  try {
    const { startTime, endTime } = req.body;

    // Retrieve bookings that overlap with the specified time period
    const overlappingBookings = await Booking.find({
      startTime: { $lt: endTime },
      endTime: { $gt: startTime }
    });

    // Get the room numbers of booked rooms
    const bookedRoomNumbers = overlappingBookings.map(booking => booking.roomNumber);

    // Query rooms collection to find available rooms
    const availableRooms = await Room.find({ roomNumber: { $nin: bookedRoomNumbers } });

    res.json(availableRooms);
  } catch (error) {
    console.error('Error getting available rooms:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
