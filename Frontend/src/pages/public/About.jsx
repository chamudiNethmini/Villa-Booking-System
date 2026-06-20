import { villaImages } from "../../data/siteData";

function About() {
  return (
    <section className="section page-section">
      <div className="section-container two-column">
        <div>
          <span className="section-label">About Us</span>
          <h1>Simple, peaceful, and close to the beach</h1>
          <p>
            CoastalStay Villa is a comfortable holiday villa located within a
            short walking distance from the beach. It is designed for travelers
            who need a clean, affordable, and relaxing place to stay.
          </p>
          <p>
            Our goal is to provide a homely villa experience with essential
            facilities, friendly service, and a calm environment for families,
            couples, and foreign tourists.
          </p>

          <div className="about-points">
            <div>
              <h3>200m</h3>
              <p>Walking distance to beach</p>
            </div>
            <div>
              <h3>3+</h3>
              <p>Comfortable rooms</p>
            </div>
            <div>
              <h3>24/7</h3>
              <p>Guest support</p>
            </div>
          </div>
        </div>

        <div className="about-image-box">
          <img src={villaImages.about} alt="About villa" />
        </div>
      </div>
    </section>
  );
}

export default About;