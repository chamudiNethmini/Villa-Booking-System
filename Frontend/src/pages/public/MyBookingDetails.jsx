import { Link, useParams, useSearchParams } from "react-router-dom";
import BookingStatusBadge from "../../components/bookings/BookingStatusBadge";
import {
  getBookingById,
  getCustomerEmail,
} from "../../services/bookingService";

function MyBookingDetails() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const booking = getBookingById(id);

  const customerEmail =
    searchParams.get("email") || getCustomerEmail();

  const isOwner =
    booking &&
    customerEmail &&
    booking.email.trim().toLowerCase() === customerEmail.trim().toLowerCase();

  if (!booking || !isOwner) {
    return (
      <section className="section page-section my-bookings-section">
        <div className="section-container">
          <div className="booking-details-card">
            <h1>Booking not found</h1>
            <p>
              This booking does not exist or is not linked to your email address.
            </p>
            <Link to="/my-bookings" className="primary-btn small-btn">
              Back to My Bookings
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const emailQuery = encodeURIComponent(customerEmail);

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
              to={`/my-bookings?email=${emailQuery}`}
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
