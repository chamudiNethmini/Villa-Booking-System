import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoomTable from "../../../components/rooms/RoomTable";
import {
  deleteRoom,
  getRooms,
  toggleRoomAvailability,
} from "../../../services/roomService";

function AdminRooms() {
  const [rooms, setRooms] = useState([]);

  const loadRooms = async () => {
    const data = await getRooms();
    setRooms(data);
  };

  useEffect(() => {
    loadRooms();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this room?"
    );

    if (confirmDelete) {
      await deleteRoom(id);
      await loadRooms();
    }
  };

  const handleToggleAvailability = async (id) => {
    await toggleRoomAvailability(id);
    await loadRooms();
  };

  return (
    <section className="admin-page">
      <div className="admin-header">
        <div>
          <span className="section-label">Admin</span>
          <h1>Room Management</h1>
          <p>Add, edit, delete, and manage villa room availability.</p>
        </div>

        <Link to="/admin/rooms/add" className="primary-btn">
          Add New Room
        </Link>
      </div>

      <RoomTable
        rooms={rooms}
        onDelete={handleDelete}
        onToggleAvailability={handleToggleAvailability}
      />
    </section>
  );
}

export default AdminRooms;