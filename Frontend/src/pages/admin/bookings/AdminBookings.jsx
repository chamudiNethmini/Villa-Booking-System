import { useEffect, useState } from "react";
import BookingTable from "../../../components/bookings/BookingTable";
import {
  deleteBooking,
  getBookings,
  updateBookingStatus,
} from "../../../services/bookingService";

function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  const loadBookings = () => {
    setBookings(getBookings());
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const handleStatusChange = (id, status) => {
    updateBookingStatus(id, status);
    loadBookings();
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking request?"
    );

    if (confirmDelete) {
      deleteBooking(id);
      loadBookings();
    }
  };

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

  return (
    <section className="admin-page">
      <div className="admin-header">
        <div>
          <span className="section-label">Admin</span>
          <h1>Booking Management</h1>
          <p>View booking requests and update booking status.</p>
        </div>
      </div>

      <div className="booking-stats-grid">
        <div className="booking-stat-card">
          <span>Total</span>
          <h3>{totalBookings}</h3>
        </div>

        <div className="booking-stat-card">
          <span>Pending</span>
          <h3>{pendingBookings}</h3>
        </div>

        <div className="booking-stat-card">
          <span>Confirmed</span>
          <h3>{confirmedBookings}</h3>
        </div>

        <div className="booking-stat-card">
          <span>Cancelled</span>
          <h3>{cancelledBookings}</h3>
        </div>
      </div>

      <BookingTable
        bookings={bookings}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </section>
  );
}

export default AdminBookings;