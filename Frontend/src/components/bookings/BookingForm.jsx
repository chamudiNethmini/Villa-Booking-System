import { useEffect, useState } from "react";
import { getRooms } from "../../services/roomService";

function BookingForm({ selectedRoomId = "", onSubmit }) {
  const [rooms, setRooms] = useState([]);

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    roomId: selectedRoomId,
    checkInDate: "",
    checkOutDate: "",
    guests: "",
    message: "",
  });

  useEffect(() => {
    setRooms(getRooms());
  }, []);

  useEffect(() => {
    if (selectedRoomId) {
      setFormData((prev) => ({
        ...prev,
        roomId: selectedRoomId,
      }));
    }
  }, [selectedRoomId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (
      !formData.customerName ||
      !formData.email ||
      !formData.phone ||
      !formData.roomId ||
      !formData.checkInDate ||
      !formData.checkOutDate ||
      !formData.guests
    ) {
      alert("Please fill all required fields");
      return false;
    }

    if (new Date(formData.checkOutDate) <= new Date(formData.checkInDate)) {
      alert("Check-out date must be after check-in date");
      return false;
    }

    if (Number(formData.guests) <= 0) {
      alert("Number of guests must be greater than 0");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formData);

    setFormData({
      customerName: "",
      email: "",
      phone: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
      guests: "",
      message: "",
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="customerName"
            placeholder="Enter your full name"
            value={formData.customerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Select Room *</label>
          <select
            name="roomId"
            value={formData.roomId}
            onChange={handleChange}
          >
            <option value="">Choose a room</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.title} - LKR {room.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Check-in Date *</label>
          <input
            type="date"
            name="checkInDate"
            value={formData.checkInDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Check-out Date *</label>
          <input
            type="date"
            name="checkOutDate"
            value={formData.checkOutDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Number of Guests *</label>
        <input
          type="number"
          name="guests"
          placeholder="Example: 2"
          value={formData.guests}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Special Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="Any special request or message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button type="submit" className="primary-btn booking-submit-btn">
        Submit Booking Request
      </button>
    </form>
  );
}

export default BookingForm;