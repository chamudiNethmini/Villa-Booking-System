const STORAGE_KEY = "villa_rooms";

const defaultRooms = [
  {
    id: "1",
    title: "Deluxe Double Room",
    description:
      "A cozy double room with a peaceful interior, comfortable bed, and basic facilities for a relaxing stay.",
    price: 14500,
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    facilities: ["Free Wi-Fi", "Air Conditioning", "Private Bathroom"],
    isAvailable: true,
  },
  {
    id: "2",
    title: "Family Room",
    description:
      "A spacious room suitable for small families with comfortable bedding and a calm villa atmosphere.",
    price: 22000,
    capacity: 4,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    facilities: ["Free Wi-Fi", "Kitchen Access", "Garden View"],
    isAvailable: true,
  },
  {
    id: "3",
    title: "Standard Room",
    description:
      "A simple and clean room for budget-friendly travelers who want comfort near the beach.",
    price: 10500,
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    facilities: ["Free Wi-Fi", "Fan", "Shared Kitchen"],
    isAvailable: false,
  },
];

const getStoredRooms = () => {
  const rooms = localStorage.getItem(STORAGE_KEY);

  if (!rooms) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultRooms));
    return defaultRooms;
  }

  return JSON.parse(rooms);
};

const saveRooms = (rooms) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rooms));
};

export const getRooms = () => {
  return getStoredRooms();
};

export const getRoomById = (id) => {
  const rooms = getStoredRooms();
  return rooms.find((room) => room.id === id);
};

export const addRoom = (roomData) => {
  const rooms = getStoredRooms();

  const newRoom = {
    id: Date.now().toString(),
    ...roomData,
    price: Number(roomData.price),
    capacity: Number(roomData.capacity),
    facilities:
      typeof roomData.facilities === "string"
        ? roomData.facilities.split(",").map((item) => item.trim())
        : roomData.facilities,
    isAvailable: Boolean(roomData.isAvailable),
  };

  saveRooms([...rooms, newRoom]);
  return newRoom;
};

export const updateRoom = (id, updatedData) => {
  const rooms = getStoredRooms();

  const updatedRooms = rooms.map((room) =>
    room.id === id
      ? {
          ...room,
          ...updatedData,
          price: Number(updatedData.price),
          capacity: Number(updatedData.capacity),
          facilities:
            typeof updatedData.facilities === "string"
              ? updatedData.facilities.split(",").map((item) => item.trim())
              : updatedData.facilities,
          isAvailable: Boolean(updatedData.isAvailable),
        }
      : room
  );

  saveRooms(updatedRooms);
};

export const deleteRoom = (id) => {
  const rooms = getStoredRooms();
  const filteredRooms = rooms.filter((room) => room.id !== id);
  saveRooms(filteredRooms);
};

export const toggleRoomAvailability = (id) => {
  const rooms = getStoredRooms();

  const updatedRooms = rooms.map((room) =>
    room.id === id ? { ...room, isAvailable: !room.isAvailable } : room
  );

  saveRooms(updatedRooms);
};