import { useCallback, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../../components/public/PageHero";
import MyBookingsTable from "../../components/bookings/MyBookingsTable";
import {
  getCustomerBookings,
  getCustomerEmail,
  saveCustomerEmail,
} from "../../services/bookingService";

function MyBookings() {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadBookings = useCallback(async (lookupValue) => {
    const trimmed = lookupValue.trim();

    if (!trimmed) {
      setBookings([]);
      setHasSearched(false);
      return;
    }

    setLoading(true);

    try {
      if (trimmed.includes("@")) {
        saveCustomerEmail(trimmed);
      }

      const result = await getCustomerBookings(trimmed);
      setBookings(result);
      setHasSearched(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
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
        description="Enter the email you used when booking to see your request status. Updates from the villa team appear here."
      />

      <section className="section my-bookings-section">
        <div className="section-container">
          <div className="my-bookings-lookup-card">
            <h2>Find your bookings</h2>
            <p>
              Use the same email address, phone number, or booking ID from your
              booking request.
            </p>

            <form className="my-bookings-lookup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="booking-search">Email, phone, or booking ID</label>
                <input
                  id="booking-search"
                  type="text"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="primary-btn" disabled={loading}>
                {loading ? "Searching..." : "View My Bookings"}
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
                  disabled={loading}
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

              <MyBookingsTable bookings={bookings} searchValue={email} />

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
