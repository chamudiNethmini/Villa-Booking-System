import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../../components/public/PageHero";
import MyBookingsTable from "../../components/bookings/MyBookingsTable";
import {
  getBookingsByEmail,
  getCustomerEmail,
  saveCustomerEmail,
} from "../../services/bookingService";

function MyBookings() {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const loadBookings = useCallback((lookupEmail) => {
    const trimmed = lookupEmail.trim();

    if (!trimmed) {
      setBookings([]);
      setHasSearched(false);
      return;
    }

    saveCustomerEmail(trimmed);
    setBookings(getBookingsByEmail(trimmed));
    setHasSearched(true);
  }, []);

  useEffect(() => {
    const emailFromUrl = searchParams.get("email");
    const savedEmail = getCustomerEmail();
    const initialEmail = emailFromUrl || savedEmail;

    if (initialEmail) {
      setEmail(initialEmail);
      loadBookings(initialEmail);
    }
  }, [searchParams, loadBookings]);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "villa_bookings" && email) {
        loadBookings(email);
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && email) {
        loadBookings(email);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [email, loadBookings]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loadBookings(email);
  };

  const handleRefresh = () => {
    if (email) loadBookings(email);
  };

  const pendingCount = bookings.filter((b) => b.status === "Pending").length;
  const confirmedCount = bookings.filter((b) => b.status === "Confirmed").length;
  const cancelledCount = bookings.filter((b) => b.status === "Cancelled").length;

  return (
    <>
      <PageHero
        label="My Bookings"
        title="Track your booking requests"
        description="Enter the email you used when booking to see your request status. Updates from the villa team appear here automatically."
      />

      <section className="section my-bookings-section">
        <div className="section-container">
          <div className="my-bookings-lookup-card">
            <h2>Find your bookings</h2>
            <p>Use the same email address you entered on your booking request form.</p>

            <form className="my-bookings-lookup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="booking-email">Email address</label>
                <input
                  id="booking-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="primary-btn">
                View My Bookings
              </button>
            </form>
          </div>

          {hasSearched && (
            <div className="my-bookings-results">
              <div className="my-bookings-results-header">
                <div>
                  <h2>Your bookings</h2>
                  <p>
                    Showing {bookings.length} booking
                    {bookings.length !== 1 ? "s" : ""} for <strong>{email}</strong>
                  </p>
                </div>

                <button
                  type="button"
                  className="secondary-btn secondary-btn--outline my-bookings-refresh-btn"
                  onClick={handleRefresh}
                >
                  Refresh status
                </button>
              </div>

              {bookings.length > 0 && (
                <div className="my-bookings-stats">
                  <div className="my-bookings-stat pending">
                    <span>Pending</span>
                    <strong>{pendingCount}</strong>
                  </div>
                  <div className="my-bookings-stat confirmed">
                    <span>Confirmed</span>
                    <strong>{confirmedCount}</strong>
                  </div>
                  <div className="my-bookings-stat cancelled">
                    <span>Cancelled</span>
                    <strong>{cancelledCount}</strong>
                  </div>
                </div>
              )}

              <MyBookingsTable bookings={bookings} customerEmail={email} />

              {bookings.length === 0 && (
                <div className="my-bookings-empty-actions">
                  <Link to="/book-now" className="primary-btn">
                    Make a booking request
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MyBookings;
