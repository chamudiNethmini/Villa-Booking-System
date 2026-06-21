import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const pageMeta = [
  { match: "/admin/dashboard", title: "Dashboard", subtitle: "Villa management overview" },
  { match: "/admin/rooms/add", title: "Add Room", subtitle: "Create a new villa room" },
  { match: "/admin/rooms/edit", title: "Edit Room", subtitle: "Update room details" },
  { match: "/admin/rooms", title: "Room Management", subtitle: "Manage availability and room listings" },
  { match: "/admin/bookings/", title: "Booking Details", subtitle: "Review customer request" },
  { match: "/admin/bookings", title: "Booking Management", subtitle: "Confirm or cancel booking requests" },
];

function AdminNavbar() {
  const location = useLocation();
  const { admin } = useAuth();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const currentPage =
    pageMeta.find((page) => location.pathname.startsWith(page.match)) ||
    pageMeta[0];

  const displayName = admin?.name || "Villa Owner";
  const initials = displayName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="admin-top-navbar">
      <div className="admin-top-navbar-text">
        <span className="admin-top-navbar-date">{today}</span>
        <h2>{currentPage.title}</h2>
        <p>{currentPage.subtitle}</p>
      </div>

      <div className="admin-profile-box">
        <div>
          <strong>{displayName}</strong>
          <span>{admin?.email || "Administrator"}</span>
        </div>
        <div className="admin-avatar" aria-hidden="true">
          {initials}
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
