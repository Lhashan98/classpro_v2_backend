const Room = require('../room/roomModel');

// Get all room
exports.getAllRooms = async (req, res) => {
  try {
    const room = await Room.find();
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching rooms' });
  }
};

// Get room by room number
exports.getRoomByNumber = async (req, res) => {
  const roomNumber = req.params.roomNumber;
  try {
    const room = await Room.findOne({ roomNumber: roomNumber });
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching room' });
  }
};

// Create a new room
exports.createRoom = async (req, res) => {
  const { roomNumber, capacity, location, features } = req.body;
  try {
    const room = new Room({ roomNumber, capacity, location, features });
    await room.save();
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: 'Error creating room' });
  }
};

// Update room by room number
exports.updateRoom = async (req, res) => {
  const roomNumber = req.params.roomNumber;
  const { capacity, location, features } = req.body;
  try {
    const room = await Room.findOneAndUpdate(
      { roomNumber: roomNumber },
      { capacity, location, features },
      { new: true }
    );
    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ error: 'Error updating room' });
  }
};

// Delete room by room number
exports.deleteRoom = async (req, res) => {
  const roomNumber = req.params.roomNumber;
  try {
    const deletedRoom = await Room.findOneAndDelete({ roomNumber: roomNumber });
    if (!deletedRoom) {
      return res.status(404).json({ error: 'Room not found' });
    }
    res.json(deletedRoom);
  } catch (error) {
    res.status(500).json({ error: 'Error deleting room' });
  }
};
