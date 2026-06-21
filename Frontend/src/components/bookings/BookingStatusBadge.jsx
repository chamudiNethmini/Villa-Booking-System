function BookingStatusBadge({ status }) {
  const statusClass = status.toLowerCase();

  return (
    <span className={`booking-status ${statusClass}`}>
      {status}
    </span>
  );
}

export default BookingStatusBadge;