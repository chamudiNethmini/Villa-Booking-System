import { API_BASE_URL } from "../utils/api";
import { getAuthHeaders } from "./authService";

const normalizeRoom = (room) => ({
  id: room._id || room.id,
  _id: room._id || room.id,
  title: room.title,
  description: room.description,
  price: Number(room.price),
  capacity: Number(room.capacity),
  image: room.image,
  facilities: room.facilities || [],
  isAvailable: room.isAvailable,
  createdAt: room.createdAt,
  updatedAt: room.updatedAt,
});

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};

export const getRooms = async () => {
  const response = await fetch(`${API_BASE_URL}/rooms`);
  const data = await handleResponse(response);
  return data.map(normalizeRoom);
};

export const getRoomById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/rooms/${id}`);
  const data = await handleResponse(response);
  return normalizeRoom(data);
};

export const addRoom = async (roomData) => {
  const formattedRoom = {
    ...roomData,
    price: Number(roomData.price),
    capacity: Number(roomData.capacity),
    facilities:
      typeof roomData.facilities === "string"
        ? roomData.facilities.split(",").map((item) => item.trim())
        : roomData.facilities,
    isAvailable: Boolean(roomData.isAvailable),
  };

  const response = await fetch(`${API_BASE_URL}/rooms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(formattedRoom),
  });

  const data = await handleResponse(response);
  return normalizeRoom(data);
};

export const updateRoom = async (id, updatedData) => {
  const formattedRoom = {
    ...updatedData,
    price: Number(updatedData.price),
    capacity: Number(updatedData.capacity),
    facilities:
      typeof updatedData.facilities === "string"
        ? updatedData.facilities.split(",").map((item) => item.trim())
        : updatedData.facilities,
    isAvailable: Boolean(updatedData.isAvailable),
  };

  const response = await fetch(`${API_BASE_URL}/rooms/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
    body: JSON.stringify(formattedRoom),
  });

  const data = await handleResponse(response);
  return normalizeRoom(data);
};

export const deleteRoom = async (id) => {
  const response = await fetch(`${API_BASE_URL}/rooms/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });

  return handleResponse(response);
};

export const toggleRoomAvailability = async (id) => {
  const room = await getRoomById(id);

  const updatedRoom = {
    ...room,
    isAvailable: !room.isAvailable,
  };

  return updateRoom(id, updatedRoom);
};