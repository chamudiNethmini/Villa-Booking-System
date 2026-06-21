import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Facilities from "../pages/public/Facilities";
import Gallery from "../pages/public/Gallery";
import Contact from "../pages/public/Contact";
import BookNow from "../pages/public/BookNow";
import MyBookings from "../pages/public/MyBookings";
import MyBookingDetails from "../pages/public/MyBookingDetails";

import Rooms from "../pages/public/Rooms";
import RoomDetails from "../pages/public/RoomDetails";

import AdminRooms from "../pages/admin/rooms/AdminRooms";
import AddRoom from "../pages/admin/rooms/AddRoom";
import EditRoom from "../pages/admin/rooms/EditRoom";
import AdminBookings from "../pages/admin/bookings/AdminBookings";
import BookingDetails from "../pages/admin/bookings/BookingDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/my-bookings/:id" element={<MyBookingDetails />} />

      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />

      <Route path="/admin/rooms" element={<AdminRooms />} />
      <Route path="/admin/rooms/add" element={<AddRoom />} />
      <Route path="/admin/rooms/edit/:id" element={<EditRoom />} />
      <Route path="/admin/bookings" element={<AdminBookings />} />
      <Route path="/admin/bookings/:id" element={<BookingDetails />} />
    </Routes>
  );
}

export default AppRoutes;