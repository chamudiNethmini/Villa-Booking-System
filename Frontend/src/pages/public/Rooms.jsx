import { useEffect, useState } from "react";
import PageHero from "../../components/public/PageHero";
import RoomCard from "../../components/rooms/RoomCard";
import { getRooms } from "../../services/roomService";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadRooms();
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
          {loading ? (
            <p>Loading rooms...</p>
          ) : (
            <div className="rooms-grid">
              {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Rooms;