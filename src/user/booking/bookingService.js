
const Booking = require('./bookingModel');



// Service method to check if a room is available for a given time slot
exports.isRoomAvailable = async (roomNumber, date, startTime, endTime) => {
  try {
    const existingBooking = await Booking.findOne({
      roomNumber,
      date,
      $or: [
        { startTime: { $lt: startTime }, endTime: { $gt: startTime } },
        { startTime: { $lt: endTime }, endTime: { $gt: endTime } }
      ]
    });
    return !existingBooking; // Return true if room is available, false otherwise
  } catch (error) {
    throw new Error('Could not check room availability');
  }
};
