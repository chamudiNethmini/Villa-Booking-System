import { Link, useNavigate, useParams } from "react-router-dom";
import RoomForm from "../../../components/rooms/RoomForm";
import { getRoomById, updateRoom } from "../../../services/roomService";

function EditRoom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = getRoomById(id);

  if (!room) {
    return (
      <section className="admin-page">
        <h1>Room not found</h1>
        <Link to="/admin/rooms" className="primary-btn small-btn">
          Back to Rooms
        </Link>
      </section>
    );
  }

  const handleUpdateRoom = (roomData) => {
    updateRoom(id, roomData);
    alert("Room updated successfully");
    navigate("/admin/rooms");
  };

  return (
    <section className="admin-page">
      <div className="admin-form-container">
        <span className="section-label">Admin</span>
        <h1>Edit Room</h1>
        <p>Update room details and availability.</p>

        <RoomForm
          initialData={room}
          onSubmit={handleUpdateRoom}
          buttonText="Update Room"
        />
      </div>
    </section>
  );
}

export default EditRoom;