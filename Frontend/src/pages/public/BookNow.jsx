function BookNow() {
  return (
    <section className="section page-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">Booking</span>
          <h1>Book your villa stay</h1>
          <p>
            This page will be connected to the Booking Management module.
          </p>
        </div>

        <div className="contact-card booking-form-box">
          <h2>Booking Request</h2>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
            <input type="date" />
            <input type="date" />
            <input type="number" placeholder="Number of Guests" />
            <textarea placeholder="Special Message" rows="5"></textarea>

            <button type="submit" className="primary-btn form-btn">
              Submit Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookNow;