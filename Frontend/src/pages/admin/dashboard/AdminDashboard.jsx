import { useEffect, useState } from "react";
import DashboardCard from "../../../components/admin/DashboardCard";
import RecentBookings from "../../../components/admin/RecentBookings";
import { getDashboardStats } from "../../../services/dashboardService";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalRooms: 0,
    availableRooms: 0,
    unavailableRooms: 0,
    totalBookings: 0,
    pendingBookings: 0,
    confirmedBookings: 0,
    cancelledBookings: 0,
    recentBookings: [],
  });

  useEffect(() => {
    setStats(getDashboardStats());
  }, []);

  return (
    <section className="admin-dashboard-page">
      <div className="admin-dashboard-heading">
        <span className="section-label">Overview</span>
        <h1>Welcome back</h1>
        <p>
          Monitor rooms, availability, booking requests, and recent customer
          activity from one place.
        </p>
      </div>

      <div className="admin-dashboard-section">
        <h2 className="admin-dashboard-section-title">Room overview</h2>
        <div className="dashboard-card-grid dashboard-card-grid--3">
          <DashboardCard
            title="Total Rooms"
            value={stats.totalRooms}
            type="rooms"
          />
          <DashboardCard
            title="Available Rooms"
            value={stats.availableRooms}
            type="available"
          />
          <DashboardCard
            title="Unavailable Rooms"
            value={stats.unavailableRooms}
            type="unavailable"
          />
        </div>
      </div>

      <div className="admin-dashboard-section">
        <h2 className="admin-dashboard-section-title">Booking overview</h2>
        <div className="dashboard-card-grid dashboard-card-grid--4">
          <DashboardCard
            title="Total Bookings"
            value={stats.totalBookings}
            type="bookings"
          />
          <DashboardCard
            title="Pending"
            value={stats.pendingBookings}
            type="pending"
          />
          <DashboardCard
            title="Confirmed"
            value={stats.confirmedBookings}
            type="confirmed"
          />
          <DashboardCard
            title="Cancelled"
            value={stats.cancelledBookings}
            type="cancelled"
          />
        </div>
      </div>

      <RecentBookings bookings={stats.recentBookings} />
    </section>
  );
}

export default AdminDashboard;
