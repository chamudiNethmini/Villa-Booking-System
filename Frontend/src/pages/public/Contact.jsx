function Contact() {
  return (
    <section className="section page-section light-section">
      <div className="section-container two-column">
        <div>
          <span className="section-label">Contact Us</span>
          <h1>Get in touch with CoastalStay Villa</h1>
          <p>
            Have questions about rooms, facilities, or booking availability?
            Contact us and we will reply as soon as possible.
          </p>

          <div className="contact-info">
            <div>
              <h3>Location</h3>
              <p>Near Beach Road, Sri Lanka</p>
            </div>

            <div>
              <h3>Phone</h3>
              <p>+94 7X XXX XXXX</p>
            </div>

            <div>
              <h3>Email</h3>
              <p>coastalstay@example.com</p>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit" className="primary-btn form-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;