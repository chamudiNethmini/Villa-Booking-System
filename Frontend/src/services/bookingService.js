import { API_BASE_URL } from "../utils/api";

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
    (typeof booking.roomId === "object" ? booking.roomId?.title : "Selected Room"),
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

export const getBookings = async () => {
  const response = await fetch(`${API_BASE_URL}/bookings`);
  const data = await handleResponse(response);
  return data.map(normalizeBooking);
};

export const getBookingById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/bookings/${id}`);
  const data = await handleResponse(response);
  return normalizeBooking(data);
};

export const getCustomerBookings = async (searchValue) => {
  const response = await fetch(
    `${API_BASE_URL}/bookings/customer/search?search=${encodeURIComponent(
      searchValue
    )}`
  );

  const data = await handleResponse(response);
  return data.map(normalizeBooking);
};

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

export const updateBookingStatus = async (id, status) => {
  const response = await fetch(`${API_BASE_URL}/bookings/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  const data = await handleResponse(response);
  return normalizeBooking(data);
};

export const deleteBooking = async (id) => {
  const response = await fetch(`${API_BASE_URL}/bookings/${id}`, {
    method: "DELETE",
  });

  return handleResponse(response);
};