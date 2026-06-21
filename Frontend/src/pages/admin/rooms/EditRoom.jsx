import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RoomForm from "../../../components/rooms/RoomForm";
import { getRoomById, updateRoom } from "../../../services/roomService";

function EditRoom() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRoom = async () => {
      try {
        const data = await getRoomById(id);
        setRoom(data);
      } catch {
        setRoom(null);
      } finally {
        setLoading(false);
      }
    };

    loadRoom();
  }, [id]);

  const handleUpdateRoom = async (roomData) => {
    try {
      await updateRoom(id, roomData);
      alert("Room updated successfully");
      navigate("/admin/rooms");
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return (
      <section className="admin-page">
        <p>Loading room...</p>
      </section>
    );
  }

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

  return (
    <section className="admin-page">
      <div className="admin-form-container">
        <span className="section-label">Rooms</span>
        <h1>Edit room</h1>
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
