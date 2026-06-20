import PageHero from "../../components/public/PageHero";
import FacilityCard from "../../components/public/FacilityCard";
import { facilities } from "../../data/siteData";

function Facilities() {
  return (
    <>
      <PageHero
        label="Facilities"
        title="Amenities for a relaxed coastal stay"
        description="We provide thoughtful, practical facilities to make your villa holiday comfortable and truly enjoyable."
      />

      <section className="section page-section light-section">
        <div className="section-container">
          <div className="facility-grid">
            {facilities.map((facility, index) => (
              <FacilityCard key={index} facility={facility} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Facilities;
