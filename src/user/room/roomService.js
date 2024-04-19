// roomervice.js

const Room = require('./roomModel');

// Service method to get a room by ID
exports.getRoomById = async (roomId) => {
  try {
    const room = await Room.findById(roomId);
    return room;
  } catch (error) {
    throw new Error('Error fetching room: ' + error.message);
  }
};

// Service method to get all room
exports.getAllRoom = async () => {
  try {
    const room = await Room.find();
    return room;
  } catch (error) {
    throw new Error('Error fetching room: ' + error.message);
  }
};
