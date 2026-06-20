import { Link } from "react-router-dom";
import { villaImages } from "../../data/siteData";

function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(61, 54, 48, 0.42), rgba(61, 54, 48, 0.55)), url(${villaImages.hero})`,
      }}
    >
      <div className="hero-content">
        <span className="hero-tag">Beachside Retreat</span>
        <h1>Your Peaceful Escape by the Shore</h1>
        <p>
          Unwind in our warm, welcoming villa — steps from the beach, designed
          for comfort, relaxation, and unforgettable coastal holidays.
        </p>

        <div className="hero-buttons">
          <Link to="/book-now" className="primary-btn">
            Book Your Stay
          </Link>
          <Link to="/gallery" className="secondary-btn">
            Explore Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
