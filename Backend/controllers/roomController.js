import Room from "../models/Room.js";

// GET all rooms
export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().sort({ createdAt: -1 });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch rooms", error: error.message });
  }
};

// GET single room
export const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch room", error: error.message });
  }
};

// POST create room
export const createRoom = async (req, res) => {
  try {
    const { title, description, price, capacity, image, facilities, isAvailable } = req.body;

    const room = await Room.create({
      title,
      description,
      price,
      capacity,
      image,
      facilities,
      isAvailable,
    });

    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: "Failed to create room", error: error.message });
  }
};

// PUT update room
export const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedRoom) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json(updatedRoom);
  } catch (error) {
    res.status(500).json({ message: "Failed to update room", error: error.message });
  }
};

// DELETE room
export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);

    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }

    res.status(200).json({ message: "Room deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete room", error: error.message });
  }
};