import { Link } from "react-router-dom";

function RoomTable({ rooms, onDelete, onToggleAvailability }) {
  return (
    <div className="admin-table-wrapper">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Room</th>
            <th>Price</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {rooms.length === 0 ? (
            <tr>
              <td colSpan="5" className="empty-table">
                No rooms found
              </td>
            </tr>
          ) : (
            rooms.map((room) => (
              <tr key={room.id}>
                <td>
                  <div className="table-room-info">
                    <img src={room.image} alt={room.title} />
                    <div>
                      <strong>{room.title}</strong>
                      <p>{room.facilities.join(", ")}</p>
                    </div>
                  </div>
                </td>

                <td>LKR {room.price.toLocaleString()}</td>
                <td>{room.capacity} Guests</td>

                <td>
                  <span
                    className={
                      room.isAvailable
                        ? "table-status available"
                        : "table-status unavailable"
                    }
                  >
                    {room.isAvailable ? "Available" : "Unavailable"}
                  </span>
                </td>

                <td>
                  <div className="table-actions">
                    <Link to={`/admin/rooms/edit/${room.id}`} className="edit-btn">
                      Edit
                    </Link>

                    <button
                      className="status-btn"
                      onClick={() => onToggleAvailability(room.id)}
                    >
                      Change Status
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => onDelete(room.id)}
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

export default RoomTable;