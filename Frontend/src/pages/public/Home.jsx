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
            <h2>A calm place for your perfect holiday</h2>
            <p>
              CoastalStay Villa is designed for guests who want a simple,
              relaxing, and comfortable stay near the beach. The villa offers
              clean rooms, peaceful surroundings, and essential facilities for a
              memorable vacation.
            </p>
            <Link to="/about" className="primary-btn small-btn">
              Learn More
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
            <h2>Explore our villa spaces</h2>
          </div>

          <div className="gallery-grid">
            {galleryImages.slice(0, 3).map((item, index) => (
              <GalleryCard key={index} item={item} />
            ))}
          </div>

          <div className="center-btn">
            <Link to="/gallery" className="primary-btn small-btn">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="booking-cta">
        <div className="section-container">
          <h2>Ready to enjoy your stay?</h2>
          <p>
            Send a booking request and our villa team will contact you soon.
          </p>
          <Link to="/book-now" className="secondary-btn">
            Book Your Stay
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;