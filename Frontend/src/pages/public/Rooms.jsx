import { useEffect, useState } from "react";
import PageHero from "../../components/public/PageHero";
import RoomCard from "../../components/rooms/RoomCard";
import { getRooms } from "../../services/roomService";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(getRooms());
  }, []);

  return (
    <>
      <PageHero
        label="Rooms"
        title="Choose your perfect villa room"
        description="Explore our comfortable rooms designed for peaceful stays near the beach."
      />

      <section className="section">
        <div className="section-container">
          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Rooms;