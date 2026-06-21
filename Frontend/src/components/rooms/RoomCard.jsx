import { Link } from "react-router-dom";

function RoomCard({ room }) {
  return (
    <div className="room-card">
      <div className="room-image">
        <img src={room.image} alt={room.title} />

        <span
          className={
            room.isAvailable ? "room-status available" : "room-status unavailable"
          }
        >
          {room.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>

      <div className="room-content">
        <h3>{room.title}</h3>
        <p>{room.description}</p>

        <div className="room-meta">
          <span>{room.capacity} Guests</span>
          <span>LKR {room.price.toLocaleString()}</span>
        </div>

        <div className="room-facilities">
          {room.facilities.slice(0, 3).map((facility, index) => (
            <span key={index}>{facility}</span>
          ))}
        </div>

        <Link to={`/rooms/${room.id}`} className="primary-btn room-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;