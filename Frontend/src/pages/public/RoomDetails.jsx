import { Link, useParams } from "react-router-dom";
import { getRoomById } from "../../services/roomService";

function RoomDetails() {
  const { id } = useParams();
  const room = getRoomById(id);

  if (!room) {
    return (
      <section className="section page-section">
        <div className="section-container">
          <h1>Room not found</h1>
          <Link to="/rooms" className="primary-btn small-btn">
            Back to Rooms
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section room-details-section">
      <div className="section-container">
        <div className="room-details-grid">
          <div className="room-details-image">
            <img src={room.image} alt={room.title} />
          </div>

          <div className="room-details-content">
            <span
              className={
                room.isAvailable
                  ? "room-status-detail available"
                  : "room-status-detail unavailable"
              }
            >
              {room.isAvailable ? "Available" : "Unavailable"}
            </span>

            <h1>{room.title}</h1>
            <p>{room.description}</p>

            <div className="room-details-info">
              <div>
                <span>Price Per Night</span>
                <strong>LKR {room.price.toLocaleString()}</strong>
              </div>

              <div>
                <span>Capacity</span>
                <strong>{room.capacity} Guests</strong>
              </div>
            </div>

            <h3>Facilities</h3>
            <div className="room-details-facilities">
              {room.facilities.map((facility, index) => (
                <span key={index}>{facility}</span>
              ))}
            </div>

            <div className="room-details-buttons">
              <Link to="/rooms" className="secondary-outline-btn">
                Back to Rooms
              </Link>

              <Link to={`/book-now?roomId=${room.id}`} className="primary-btn">
                 Book This Room
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomDetails;