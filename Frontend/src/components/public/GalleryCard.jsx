function GalleryCard({ item }) {
  return (
    <div className="gallery-card">
      <img src={item.image} alt={item.title} />
      <div className="gallery-overlay">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
}

export default GalleryCard;