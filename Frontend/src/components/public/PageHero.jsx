function PageHero({ label, title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

export default PageHero;
