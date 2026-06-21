const cardIcons = {
  rooms: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
    </svg>
  ),
  available: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  unavailable: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
  bookings: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  ),
  pending: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  confirmed: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 12l2 2 4-4" />
      <rect x="3" y="5" width="18" height="16" rx="2" />
    </svg>
  ),
  cancelled: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  ),
};

function DashboardCard({ title, value, type }) {
  return (
    <div className={`dashboard-card dashboard-card--${type}`}>
      <div className={`dashboard-card-icon dashboard-card-icon--${type}`}>
        {cardIcons[type]}
      </div>

      <div className="dashboard-card-content">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
}

export default DashboardCard;
