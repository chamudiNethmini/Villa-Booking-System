import { API_BASE_URL } from "../utils/api";
import { getAuthHeaders } from "./authService";

const CUSTOMER_EMAIL_KEY = "villa_customer_email";

const formatDateOnly = (dateValue) => {
  if (!dateValue) return "";
  return new Date(dateValue).toISOString().split("T")[0];
};

const normalizeBooking = (booking) => ({
  id: booking._id || booking.id,
  _id: booking._id || booking.id,
  customerName: booking.customerName,
  email: booking.email,
  phone: booking.phone,
  roomId:
    typeof booking.roomId === "object"
      ? booking.roomId?._id
      : booking.roomId,
  roomTitle:
    booking.roomTitle ||
    (typeof booking.roomId === "object"
      ? booking.roomId?.title
      : "Selected Room"),
  checkInDate: formatDateOnly(booking.checkInDate),
  checkOutDate: formatDateOnly(booking.checkOutDate),
  guests: Number(booking.guests),
  message: booking.message || "",
  status: booking.status,
  createdAt: booking.createdAt,
  updatedAt: booking.updatedAt,
});

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

// Admin - protected
export const getBookings = async () => {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  const data = await handleResponse(response);
  return data.map(normalizeBooking);
};

// Admin - protected
export const getBookingById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  const data = await handleResponse(response);
  return normalizeBooking(data);
};

// Public - customer can search booking status
export const getCustomerBookings = async (searchValue) => {
  const response = await fetch(
    `${API_BASE_URL}/bookings/customer/search?search=${encodeURIComponent(
      searchValue
    )}`
  );

  const data = await handleResponse(response);
  return data.map(normalizeBooking);
};

// Public - customer can submit booking request
export const addBooking = async (bookingData) => {
  const formattedBooking = {
    customerName: bookingData.customerName,
    email: bookingData.email,
    phone: bookingData.phone,
    roomId: bookingData.roomId,
    checkInDate: bookingData.checkInDate,
    checkOutDate: bookingData.checkOutDate,
    guests: Number(bookingData.guests),
    message: bookingData.message,
  };

  const response = await fetch(`${API_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formattedBooking),
  });

  const data = await handleResponse(response);
  return normalizeBooking(data);
};

// Admin - protected
export const updateBookingStatus = async (id, status) => {
  const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify({ status }),
  });

  const data = await handleResponse(response);
  return normalizeBooking(data);
};

// Admin - protected
export const deleteBooking = async (id) => {
  const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });

  return handleResponse(response);
};

export const saveCustomerEmail = (email) => {
  if (!email) return;
  localStorage.setItem(CUSTOMER_EMAIL_KEY, email.trim().toLowerCase());
};

export const getCustomerEmail = () => {
  return localStorage.getItem(CUSTOMER_EMAIL_KEY) || "";
};