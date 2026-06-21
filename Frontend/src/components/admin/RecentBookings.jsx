import { Link } from "react-router-dom";
import BookingStatusBadge from "../bookings/BookingStatusBadge";

function RecentBookings({ bookings }) {
  return (
    <div className="recent-bookings-card">
      <div className="recent-bookings-header">
        <div>
          <span className="section-label">Activity</span>
          <h2>Recent bookings</h2>
          <p>Latest customer booking requests</p>
        </div>

        <Link to="/admin/bookings" className="admin-small-link">
          View all
        </Link>
      </div>

      {bookings.length === 0 ? (
        <div className="dashboard-empty-box">
          <p>No booking requests yet.</p>
          <Link to="/admin/bookings" className="secondary-btn secondary-btn--outline">
            Go to bookings
          </Link>
        </div>
      ) : (
        <div className="recent-bookings-list">
          {bookings.map((booking) => (
            <Link
              to={`/admin/bookings/${booking.id}`}
              className="recent-booking-item"
              key={booking.id}
            >
              <div className="recent-booking-info">
                <h4>{booking.customerName}</h4>
                <p>{booking.roomTitle}</p>
                <span>
                  {booking.checkInDate} → {booking.checkOutDate}
                </span>
              </div>

              <BookingStatusBadge status={booking.status} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentBookings;
