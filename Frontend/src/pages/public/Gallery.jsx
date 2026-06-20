import PageHero from "../../components/public/PageHero";
import GalleryCard from "../../components/public/GalleryCard";
import { galleryImages } from "../../data/siteData";

function Gallery() {
  return (
    <>
      <PageHero
        label="Gallery"
        title="Take a look inside our villa"
        description="Explore our rooms, living spaces, bathroom, dining area, and the relaxing coastal environment that awaits you."
      />

      <section className="section page-section">
        <div className="section-container">
          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <GalleryCard key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
