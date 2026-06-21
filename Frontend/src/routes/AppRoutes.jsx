import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Facilities from "../pages/public/Facilities";
import Gallery from "../pages/public/Gallery";
import Contact from "../pages/public/Contact";
import BookNow from "../pages/public/BookNow";
import MyBookings from "../pages/public/MyBookings";

import Rooms from "../pages/public/Rooms";
import RoomDetails from "../pages/public/RoomDetails";

import AdminLogin from "../pages/admin/auth/AdminLogin";
import ProtectedRoute from "../components/admin/ProtectedRoute";
import AdminLayout from "../components/admin/AdminLayout";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";

import AdminRooms from "../pages/admin/rooms/AdminRooms";
import AddRoom from "../pages/admin/rooms/AddRoom";
import EditRoom from "../pages/admin/rooms/EditRoom";

import AdminBookings from "../pages/admin/bookings/AdminBookings";
import BookingDetails from "../pages/admin/bookings/BookingDetails";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/rooms/:id" element={<RoomDetails />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/my-bookings" element={<MyBookings />} />

      {/* Admin Login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected Admin Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />

        <Route path="rooms" element={<AdminRooms />} />
        <Route path="rooms/add" element={<AddRoom />} />
        <Route path="rooms/edit/:id" element={<EditRoom />} />

        <Route path="bookings" element={<AdminBookings />} />
        <Route path="bookings/:id" element={<BookingDetails />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;