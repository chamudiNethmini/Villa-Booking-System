import PageHero from "../../components/public/PageHero";

function BookNow() {
  return (
    <>
      <PageHero
        label="Booking"
        title="Reserve your villa stay"
        description="Complete the form below to request a booking. Our team will confirm availability and get back to you promptly."
      />

      <section className="section page-section light-section">
        <div className="section-container">
          <div className="contact-card booking-form-box">
            <h2>Booking Request</h2>
            <p className="form-subtitle">
              Please provide your details and preferred dates. All fields marked
              with your information help us prepare the best stay for you.
            </p>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-name">Full Name</label>
                  <input
                    id="booking-name"
                    type="text"
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-email">Email Address</label>
                  <input
                    id="booking-email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-phone">Phone Number</label>
                  <input
                    id="booking-phone"
                    type="text"
                    placeholder="+94 7X XXX XXXX"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-guests">Number of Guests</label>
                  <input
                    id="booking-guests"
                    type="number"
                    placeholder="2"
                    min="1"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-checkin">Check-in Date</label>
                  <input id="booking-checkin" type="date" />
                </div>
                <div className="form-group">
                  <label htmlFor="booking-checkout">Check-out Date</label>
                  <input id="booking-checkout" type="date" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="booking-message">Special Requests</label>
                <textarea
                  id="booking-message"
                  placeholder="Any special requirements or questions..."
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="primary-btn form-btn">
                Submit Booking Request
              </button>
            </form>

            <p className="booking-note">
              You can also reach us directly via{" "}
              <span>WhatsApp</span> for faster responses.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookNow;
