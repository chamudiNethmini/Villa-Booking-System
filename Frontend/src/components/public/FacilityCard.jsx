import FacilityIcon from "./FacilityIcon";

function FacilityCard({ facility }) {
  return (
    <div className="facility-card">
      <div className="facility-icon">
        <FacilityIcon name={facility.icon} />
      </div>
      <h3>{facility.title}</h3>
      <p>{facility.description}</p>
    </div>
  );
}

export default FacilityCard;
