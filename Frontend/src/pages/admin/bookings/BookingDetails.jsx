import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookingStatusBadge from "../../../components/bookings/BookingStatusBadge";
import { getBookingById } from "../../../services/bookingService";

function BookingDetails() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooking = async () => {
      try {
        const data = await getBookingById(id);
        setBooking(data);
      } catch {
        setBooking(null);
      } finally {
        setLoading(false);
      }
    };

    loadBooking();
  }, [id]);

  if (loading) {
    return (
      <section className="admin-page">
        <p>Loading booking...</p>
      </section>
    );
  }

  if (!booking) {
    return (
      <section className="admin-page">
        <h1>Booking not found</h1>
        <Link to="/admin/bookings" className="primary-btn small-btn">
          Back to Bookings
        </Link>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <div className="booking-details-card">
        <div className="booking-details-header">
          <div>
            <span className="section-label">Booking Details</span>
            <h1>{booking.customerName}</h1>
            <p>Submitted on {new Date(booking.createdAt).toLocaleString()}</p>
          </div>

          <BookingStatusBadge status={booking.status} />
        </div>

        <div className="booking-details-grid">
          <div>
            <h3>Customer Information</h3>
            <p>
              <strong>Name:</strong> {booking.customerName}
            </p>
            <p>
              <strong>Email:</strong> {booking.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.phone}
            </p>
          </div>

          <div>
            <h3>Booking Information</h3>
            <p>
              <strong>Room:</strong> {booking.roomTitle}
            </p>
            <p>
              <strong>Check-in:</strong> {booking.checkInDate}
            </p>
            <p>
              <strong>Check-out:</strong> {booking.checkOutDate}
            </p>
            <p>
              <strong>Guests:</strong> {booking.guests}
            </p>
          </div>
        </div>

        <div className="booking-message-box">
          <h3>Special Message</h3>
          <p>{booking.message || "No special message added."}</p>
        </div>

        <Link to="/admin/bookings" className="primary-btn small-btn">
          Back to Bookings
        </Link>
      </div>
    </section>
  );
}

export default BookingDetails;
