import { getRooms } from "./roomService";
import { getBookings } from "./bookingService";

export const getDashboardStats = async () => {
  const rooms = await getRooms();
  const bookings = await getBookings();

  const totalRooms = rooms.length;
  const availableRooms = rooms.filter((room) => room.isAvailable).length;
  const unavailableRooms = rooms.filter((room) => !room.isAvailable).length;

  const totalBookings = bookings.length;
  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;
  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;
  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "Cancelled"
  ).length;

  const recentBookings = bookings.slice(0, 5);

  return {
    totalRooms,
    availableRooms,
    unavailableRooms,
    totalBookings,
    pendingBookings,
    confirmedBookings,
    cancelledBookings,
    recentBookings,
  };
};