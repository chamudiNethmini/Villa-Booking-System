import Booking from "../models/Booking.js";
import Room from "../models/Room.js";

// GET all bookings - admin
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("roomId")
      .sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
};

// GET single booking - admin
export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("roomId");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch booking",
      error: error.message,
    });
  }
};

// POST create booking - customer
export const createBooking = async (req, res) => {
  try {
    const {
      customerName,
      email,
      phone,
      roomId,
      checkInDate,
      checkOutDate,
      guests,
      message,
    } = req.body;

    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ message: "Selected room not found" });
    }

    if (new Date(checkOutDate) <= new Date(checkInDate)) {
      return res.status(400).json({
        message: "Check-out date must be after check-in date",
      });
    }

    const booking = await Booking.create({
      customerName,
      email,
      phone,
      roomId,
      roomTitle: room.title,
      checkInDate,
      checkOutDate,
      guests,
      message,
      status: "Pending",
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create booking",
      error: error.message,
    });
  }
};

// PUT update booking status - admin
export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["Pending", "Confirmed", "Cancelled"].includes(status)) {
      return res.status(400).json({ message: "Invalid booking status" });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({
      message: "Failed to update booking status",
      error: error.message,
    });
  }
};

// DELETE booking - admin
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete booking",
      error: error.message,
    });
  }
};

// GET customer bookings by email / phone / booking id
export const getCustomerBookings = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({
        message: "Email, phone number, or booking ID is required",
      });
    }

    const escapedSearch = search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const bookings = await Booking.find({
      $or: [
        { email: { $regex: new RegExp(`^${escapedSearch}$`, "i") } },
        { phone: search.trim() },
        ...(search.match(/^[0-9a-fA-F]{24}$/) ? [{ _id: search }] : []),
      ],
    }).sort({ createdAt: -1 });

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch customer bookings",
      error: error.message,
    });
  }
};