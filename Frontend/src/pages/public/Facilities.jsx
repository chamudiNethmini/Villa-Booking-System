import FacilityCard from "../../components/public/FacilityCard";
import { facilities } from "../../data/siteData";

function Facilities() {
  return (
    <section className="section page-section light-section">
      <div className="section-container">
        <div className="section-heading">
          <span className="section-label">Facilities</span>
          <h1>Villa facilities for a relaxed stay</h1>
          <p>
            We provide simple and useful facilities to make your stay
            comfortable and enjoyable.
          </p>
        </div>

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;