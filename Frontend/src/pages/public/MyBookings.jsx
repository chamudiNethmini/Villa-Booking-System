import { useState } from "react";
import PageHero from "../../components/public/PageHero";
import BookingStatusBadge from "../../components/bookings/BookingStatusBadge";
import { getCustomerBookings } from "../../services/bookingService";

function MyBookings() {
  const [searchValue, setSearchValue] = useState("");
  const [bookings, setBookings] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      alert("Please enter your email, phone number, or booking ID");
      return;
    }

    try {
      const result = await getCustomerBookings(searchValue);
      setBookings(result);
      setSearched(true);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <PageHero
        label="My Bookings"
        title="Check your booking status"
        description="Enter your email, phone number, or booking ID to view your villa booking request status."
      />

      <section className="section my-bookings-section">
        <div className="section-container">
          <div className="my-bookings-search-card">
            <h2>Find Your Booking</h2>
            <p>
              Use the same email address, phone number, or booking ID you used
              when making the booking request.
            </p>

            <form onSubmit={handleSearch} className="my-bookings-search-form">
              <input
                type="text"
                placeholder="Enter email, phone number, or booking ID"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />

              <button type="submit" className="primary-btn">
                Search Booking
              </button>
            </form>
          </div>

          {searched && bookings.length === 0 && (
            <div className="no-bookings-card">
              <h3>No bookings found</h3>
              <p>Please check your details and try again.</p>
            </div>
          )}

          {bookings.length > 0 && (
            <div className="customer-bookings-list">
              {bookings.map((booking) => (
                <div className="customer-booking-card" key={booking.id}>
                  <div className="customer-booking-header">
                    <div>
                      <h3>{booking.roomTitle}</h3>
                      <p>Booking ID: {booking.id}</p>
                    </div>

                    <BookingStatusBadge status={booking.status} />
                  </div>

                  <div className="customer-booking-details">
                    <div>
                      <span>Name</span>
                      <strong>{booking.customerName}</strong>
                    </div>

                    <div>
                      <span>Check-in</span>
                      <strong>{booking.checkInDate}</strong>
                    </div>

                    <div>
                      <span>Check-out</span>
                      <strong>{booking.checkOutDate}</strong>
                    </div>

                    <div>
                      <span>Guests</span>
                      <strong>{booking.guests}</strong>
                    </div>
                  </div>

                  <div className="customer-booking-note">
                    {booking.status === "Pending" && (
                      <p>Your request is still pending. The villa owner will confirm it soon.</p>
                    )}

                    {booking.status === "Confirmed" && (
                      <p>Your booking has been confirmed. Please contact the villa owner for final arrival details.</p>
                    )}

                    {booking.status === "Cancelled" && (
                      <p>Your booking request has been cancelled. You may contact the villa owner for more information.</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MyBookings;