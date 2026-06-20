import PageHero from "../../components/public/PageHero";
import { villaImages } from "../../data/siteData";

function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Simple, peaceful, and close to the beach"
        description="Discover the story behind CoastalStay Villa — a welcoming retreat for travelers who value comfort, calm, and coastal living."
      />

      <section className="section page-section">
        <div className="section-container two-column">
          <div>
            <span className="section-label">Our Story</span>
            <h2>A homely villa experience by the sea</h2>
            <p>
              CoastalStay Villa is a comfortable holiday retreat located within
              a short walking distance from the beach. It is designed for
              travelers who need a clean, affordable, and relaxing place to
              stay.
            </p>
            <p>
              Our goal is to provide a warm, homely experience with essential
              facilities, friendly service, and a calm environment for families,
              couples, and international guests.
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
    </>
  );
}

export default About;
