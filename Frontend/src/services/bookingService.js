import { getRoomById } from "./roomService";

const STORAGE_KEY = "villa_bookings";
const CUSTOMER_EMAIL_KEY = "villa_customer_email";

const normalizeEmail = (email) => email.trim().toLowerCase();

const getStoredBookings = () => {
  const bookings = localStorage.getItem(STORAGE_KEY);

  if (!bookings) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    return [];
  }

  return JSON.parse(bookings);
};

const saveBookings = (bookings) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
};

export const getBookings = () => {
  return getStoredBookings();
};

export const getBookingById = (id) => {
  const bookings = getStoredBookings();
  return bookings.find((booking) => booking.id === id);
};

export const getBookingsByEmail = (email) => {
  if (!email) return [];

  const normalized = normalizeEmail(email);

  return getStoredBookings().filter(
    (booking) => normalizeEmail(booking.email) === normalized
  );
};

export const saveCustomerEmail = (email) => {
  if (!email) return;
  localStorage.setItem(CUSTOMER_EMAIL_KEY, normalizeEmail(email));
};

export const getCustomerEmail = () => {
  return localStorage.getItem(CUSTOMER_EMAIL_KEY) || "";
};

export const addBooking = (bookingData) => {
  const bookings = getStoredBookings();
  const selectedRoom = getRoomById(bookingData.roomId);

  const newBooking = {
    id: Date.now().toString(),
    customerName: bookingData.customerName,
    email: bookingData.email,
    phone: bookingData.phone,
    roomId: bookingData.roomId,
    roomTitle: selectedRoom ? selectedRoom.title : "Selected Room",
    checkInDate: bookingData.checkInDate,
    checkOutDate: bookingData.checkOutDate,
    guests: Number(bookingData.guests),
    message: bookingData.message,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };

  saveBookings([newBooking, ...bookings]);
  return newBooking;
};

export const updateBookingStatus = (id, status) => {
  const bookings = getStoredBookings();

  const updatedBookings = bookings.map((booking) =>
    booking.id === id ? { ...booking, status } : booking
  );

  saveBookings(updatedBookings);
};

export const deleteBooking = (id) => {
  const bookings = getStoredBookings();
  const filteredBookings = bookings.filter((booking) => booking.id !== id);
  saveBookings(filteredBookings);
};