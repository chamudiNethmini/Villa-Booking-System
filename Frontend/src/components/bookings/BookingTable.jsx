import { Link } from "react-router-dom";
import BookingStatusBadge from "./BookingStatusBadge";

function BookingTable({ bookings, onStatusChange, onDelete }) {
  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Room</th>
            <th>Dates</th>
            <th>Guests</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bookings.length === 0 ? (
            <tr>
              <td colSpan="6" className="empty-table">
                No booking requests found
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <strong>{booking.customerName}</strong>
                  <p>{booking.phone}</p>
                  <p>{booking.email}</p>
                </td>

                <td>{booking.roomTitle}</td>

                <td>
                  <p>{booking.checkInDate}</p>
                  <p>to {booking.checkOutDate}</p>
                </td>

                <td>{booking.guests}</td>

                <td>
                  <BookingStatusBadge status={booking.status} />
                </td>

                <td>
                  <div className="table-actions">
                    <Link
                      to={`/admin/bookings/${booking.id}`}
                      className="edit-btn"
                    >
                      View
                    </Link>

                    <select
                      className="status-select"
                      value={booking.status}
                      onChange={(e) =>
                        onStatusChange(booking.id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(booking.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BookingTable;