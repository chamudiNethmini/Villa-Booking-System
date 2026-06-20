import { Link } from "react-router-dom";
import HeroSection from "../../components/public/HeroSection";
import FacilityCard from "../../components/public/FacilityCard";
import GalleryCard from "../../components/public/GalleryCard";
import { facilities, galleryImages, villaImages } from "../../data/siteData";

function Home() {
  return (
    <>
      <HeroSection />

      <section className="section about-preview">
        <div className="section-container two-column">
          <div>
            <span className="section-label">About Our Villa</span>
            <h2>A calm retreat for your perfect coastal holiday</h2>
            <p>
              CoastalStay Villa is crafted for guests who seek simplicity,
              serenity, and comfort near the beach. Enjoy clean rooms, peaceful
              surroundings, and thoughtful amenities for a truly memorable stay.
            </p>
            <Link to="/about" className="primary-btn small-btn">
              Discover Our Story
            </Link>
          </div>

          <div className="about-image-box">
            <img src={villaImages.about} alt="Villa interior" />
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-label">Facilities</span>
            <h2>Everything you need for a comfortable stay</h2>
            <p>
              From high-speed Wi-Fi to a fully equipped kitchen — we have
              thought of every detail for your convenience.
            </p>
          </div>

          <div className="facility-grid">
            {facilities.slice(0, 3).map((facility, index) => (
              <FacilityCard key={index} facility={facility} />
            ))}
          </div>

          <div className="center-btn">
            <Link to="/facilities" className="primary-btn small-btn">
              View All Facilities
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-label">Gallery</span>
            <h2>Step inside our villa spaces</h2>
            <p>
              Browse our rooms, living areas, and outdoor spaces — each
              designed with warmth and coastal charm.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.slice(0, 3).map((item, index) => (
              <GalleryCard key={index} item={item} />
            ))}
          </div>

          <div className="center-btn">
            <Link to="/gallery" className="primary-btn small-btn">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="booking-cta">
        <div className="section-container">
          <h2>Ready for your coastal getaway?</h2>
          <p>
            Send a booking request and our team will get back to you within
            24 hours to confirm your stay.
          </p>
          <Link to="/book-now" className="primary-btn">
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
