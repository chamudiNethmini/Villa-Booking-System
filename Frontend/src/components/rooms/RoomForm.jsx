import { useState } from "react";

function RoomForm({ initialData, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    price: initialData?.price || "",
    capacity: initialData?.capacity || "",
    image: initialData?.image || "",
    facilities: initialData?.facilities?.join(", ") || "",
    isAvailable: initialData?.isAvailable ?? true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.price) {
      alert("Please fill all required fields");
      return;
    }

    if (Number(formData.price) <= 0 || Number(formData.capacity) <= 0) {
      alert("Price and capacity must be greater than 0");
      return;
    }

    onSubmit(formData);
  };

  return (
    <form className="room-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Room Title</label>
        <input
          type="text"
          name="title"
          placeholder="Example: Deluxe Double Room"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          rows="5"
          placeholder="Write room description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Price Per Night</label>
          <input
            type="number"
            name="price"
            placeholder="Example: 14500"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Capacity</label>
          <input
            type="number"
            name="capacity"
            placeholder="Example: 2"
            value={formData.capacity}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          placeholder="Paste room image URL"
          value={formData.image}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Facilities</label>
        <input
          type="text"
          name="facilities"
          placeholder="Free Wi-Fi, AC, Private Bathroom"
          value={formData.facilities}
          onChange={handleChange}
        />
      </div>

      <label className="checkbox-row">
        <input
          type="checkbox"
          name="isAvailable"
          checked={formData.isAvailable}
          onChange={handleChange}
        />
        Room is available
      </label>

      <button type="submit" className="primary-btn form-submit-btn">
        {buttonText}
      </button>
    </form>
  );
}

export default RoomForm;