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
    const loadStats = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data);
      } catch (error) {
        alert(error.message);
      }
    };

    loadStats();
  }, []);

  return (
    <section className="admin-dashboard-page">
      <div className="admin-dashboard-heading">
        <span className="section-label">Dashboard</span>
        <h1>Villa Management Overview</h1>
        <p>
          Monitor rooms, availability, booking requests, and recent customer
          activity.
        </p>
      </div>

      <div className="dashboard-card-grid">
        <DashboardCard title="Total Rooms" value={stats.totalRooms} icon="🏠" />
        <DashboardCard title="Available Rooms" value={stats.availableRooms} icon="✅" />
        <DashboardCard title="Unavailable Rooms" value={stats.unavailableRooms} icon="🚫" />
        <DashboardCard title="Total Bookings" value={stats.totalBookings} icon="📅" />
        <DashboardCard title="Pending Bookings" value={stats.pendingBookings} icon="⏳" />
        <DashboardCard title="Confirmed Bookings" value={stats.confirmedBookings} icon="🎉" />
        <DashboardCard title="Cancelled Bookings" value={stats.cancelledBookings} icon="❌" />
      </div>

      <RecentBookings bookings={stats.recentBookings} />
    </section>
  );
}

export default AdminDashboard;