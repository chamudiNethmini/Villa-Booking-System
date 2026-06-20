import { Link } from "react-router-dom";
import { villaImages } from "../../data/siteData";

function HeroSection() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${villaImages.hero})`,
      }}
    >
      <div className="hero-content">
        <span className="hero-tag">Beachside Comfort Villa</span>
        <h1>Enjoy a Peaceful Stay Near the Beach</h1>
        <p>
          A clean, relaxing, and budget-friendly villa experience designed for
          local and foreign travelers.
        </p>

        <div className="hero-buttons">
          <Link to="/book-now" className="primary-btn">
            Book Now
          </Link>
          <Link to="/gallery" className="secondary-btn">
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;