import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import BookingStatusBadge from "../../components/bookings/BookingStatusBadge";
import {
  getCustomerBookings,
  getCustomerEmail,
} from "../../services/bookingService";

function MyBookingDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  const customerSearch =
    searchParams.get("email") || getCustomerEmail() || id;

  useEffect(() => {
    const loadBooking = async () => {
      try {
        const bookings = await getCustomerBookings(customerSearch);
        const match = bookings.find((item) => item.id === id);
        setBooking(match || null);
      } catch {
        setBooking(null);
      } finally {
        setLoading(false);
      }
    };

    loadBooking();
  }, [customerSearch, id]);

  if (loading) {
    return (
      <section className="section page-section my-bookings-section">
        <div className="section-container">
          <p>Loading booking...</p>
        </div>
      </section>
    );
  }

  if (!booking) {
    return (
      <section className="section page-section my-bookings-section">
        <div className="section-container">
          <div className="booking-details-card">
            <h1>Booking not found</h1>
            <p>
              This booking does not exist or is not linked to your search details.
            </p>
            <Link to="/my-bookings" className="primary-btn small-btn">
              Back to My Bookings
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const searchQuery = encodeURIComponent(customerSearch);

  return (
    <section className="section page-section my-bookings-section">
      <div className="section-container">
        <div className="booking-details-card">
          <div className="booking-details-header">
            <div>
              <span className="section-label">My Booking</span>
              <h1>{booking.roomTitle}</h1>
              <p>
                Request submitted on{" "}
                {new Date(booking.createdAt).toLocaleString()}
              </p>
            </div>

            <BookingStatusBadge status={booking.status} />
          </div>

          <div className="my-booking-status-note">
            {booking.status === "Pending" && (
              <p>
                Your request is being reviewed. The villa team will confirm or
                update the status soon.
              </p>
            )}
            {booking.status === "Confirmed" && (
              <p>
                Your booking has been confirmed. We look forward to welcoming you!
              </p>
            )}
            {booking.status === "Cancelled" && (
              <p>
                This booking request has been cancelled. Contact us if you have
                any questions.
              </p>
            )}
          </div>

          <div className="booking-details-grid">
            <div>
              <h3>Your details</h3>
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
              <h3>Stay details</h3>
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
            <h3>Special message</h3>
            <p>{booking.message || "No special message added."}</p>
          </div>

          <div className="my-booking-details-actions">
            <Link
              to={`/my-bookings?email=${searchQuery}`}
              className="secondary-outline-btn"
            >
              Back to My Bookings
            </Link>
            <Link to="/book-now" className="primary-btn">
              Book another stay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBookingDetails;
