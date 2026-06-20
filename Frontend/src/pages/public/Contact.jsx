import PageHero from "../../components/public/PageHero";

function Contact() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="We'd love to hear from you"
        description="Have questions about rooms, facilities, or availability? Reach out and we'll respond as soon as possible."
      />

      <section className="section page-section light-section">
        <div className="section-container two-column">
          <div>
            <span className="section-label">Get in Touch</span>
            <h2>Contact CoastalStay Villa</h2>
            <p>
              Whether you're planning a family holiday or a quiet couples'
              retreat, our team is here to help you plan the perfect stay.
            </p>

            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>Near Beach Road, Sri Lanka</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <div>
                  <h3>Phone</h3>
                  <p>+94 7X XXX XXXX</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>coastalstay@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h2>Send a Message</h2>
            <p className="form-subtitle">
              Fill in the form below and we'll get back to you shortly.
            </p>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Smith"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  id="contact-phone"
                  type="text"
                  placeholder="+94 7X XXX XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell us how we can help..."
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="primary-btn form-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
