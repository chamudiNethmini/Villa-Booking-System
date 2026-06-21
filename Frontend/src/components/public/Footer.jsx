import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>CoastalStay Villa</h2>
          <p>
            A serene beachside villa offering comfort, warmth, and a truly
            relaxing holiday experience just moments from the shore.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Near Beach Road, Sri Lanka</p>
          <p>+94 7X XXX XXXX</p>
          <p>coastalstay@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 CoastalStay Villa. All rights reserved.</p>
        <Link to="/admin/login" className="footer-admin-btn">
          Admin Login
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
