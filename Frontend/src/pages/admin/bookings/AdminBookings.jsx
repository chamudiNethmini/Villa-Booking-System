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
          <span className="section-label">Bookings</span>
          <h1>Booking requests</h1>
          <p>View booking requests and update booking status.</p>
        </div>
      </div>

      <div className="admin-stat-grid">
        <div className="admin-stat-card admin-stat-card--total">
          <span>Total</span>
          <h3>{totalBookings}</h3>
        </div>

        <div className="admin-stat-card admin-stat-card--pending">
          <span>Pending</span>
          <h3>{pendingBookings}</h3>
        </div>

        <div className="admin-stat-card admin-stat-card--confirmed">
          <span>Confirmed</span>
          <h3>{confirmedBookings}</h3>
        </div>

        <div className="admin-stat-card admin-stat-card--cancelled">
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