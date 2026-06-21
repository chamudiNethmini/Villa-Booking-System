import { Link } from "react-router-dom";
import BookingStatusBadge from "./BookingStatusBadge";

function MyBookingsTable({ bookings, searchValue }) {
  const searchQuery = encodeURIComponent(searchValue);

  return (
    <div className="my-bookings-table-wrapper">
      <table className="my-bookings-table">
        <thead>
          <tr>
            <th>Room</th>
            <th>Dates</th>
            <th>Guests</th>
            <th>Status</th>
            <th>Submitted</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-table">
                No bookings found for this email address.
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <strong>{booking.roomTitle}</strong>
                </td>

                <td>
                  <p>{booking.checkInDate}</p>
                  <p className="my-bookings-date-to">to {booking.checkOutDate}</p>
                </td>

                <td>{booking.guests}</td>

                <td>
                  <BookingStatusBadge status={booking.status} />
                </td>

                <td>
                  {new Date(booking.createdAt).toLocaleDateString()}
                </td>

                <td>
                  <Link
                    to={`/my-bookings/${booking.id}?email=${searchQuery}`}
                    className="edit-btn"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MyBookingsTable;
