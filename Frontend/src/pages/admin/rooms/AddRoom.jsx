import { useNavigate } from "react-router-dom";
import RoomForm from "../../../components/rooms/RoomForm";
import { addRoom } from "../../../services/roomService";

function AddRoom() {
  const navigate = useNavigate();

  const handleAddRoom = (roomData) => {
    addRoom(roomData);
    alert("Room added successfully");
    navigate("/admin/rooms");
  };

  return (
    <section className="admin-page">
      <div className="admin-form-container">
        <span className="section-label">Admin</span>
        <h1>Add New Room</h1>
        <p>Add room details that will be visible to villa visitors.</p>

        <RoomForm onSubmit={handleAddRoom} buttonText="Add Room" />
      </div>
    </section>
  );
}

export default AddRoom;