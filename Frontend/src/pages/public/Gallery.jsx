import GalleryCard from "../../components/public/GalleryCard";
import { galleryImages } from "../../data/siteData";

function Gallery() {
  return (
    <section className="section page-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">Gallery</span>
          <h1>Take a look inside our villa</h1>
          <p>
            Explore our rooms, living spaces, bathroom, dining area, and relaxing
            villa environment.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <GalleryCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;