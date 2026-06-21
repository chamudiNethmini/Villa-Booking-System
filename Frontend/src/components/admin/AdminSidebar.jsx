import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  {
    to: "/admin/dashboard",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="3" width="8" height="5" rx="2" />
        <rect x="13" y="10" width="8" height="11" rx="2" />
        <rect x="3" y="13" width="8" height="8" rx="2" />
      </svg>
    ),
  },
  {
    to: "/admin/rooms",
    label: "Rooms",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
      </svg>
    ),
  },
  {
    to: "/admin/bookings",
    label: "Bookings",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </svg>
    ),
  },
];

function AdminSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-top">
        <Link to="/admin/dashboard" className="admin-logo">
          <span className="admin-logo-mark" />
          <span>
            CoastalStay
            <small>Admin Panel</small>
          </span>
        </Link>

        <nav className="admin-menu">
          <span className="admin-menu-label">Menu</span>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="admin-menu-link">
              <span className="admin-menu-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="admin-sidebar-bottom">
        <Link to="/" target="_blank" className="admin-menu-link admin-menu-link--muted">
          <span className="admin-menu-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 3h7v7M10 14 21 3M5 10v11h11" />
            </svg>
          </span>
          View Website
        </Link>

        <button type="button" className="admin-logout-btn" onClick={handleLogout}>
          <span className="admin-menu-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
          </span>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;
