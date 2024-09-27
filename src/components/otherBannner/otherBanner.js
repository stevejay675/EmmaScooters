import './otherBanner.css';

export default function BannerSection() {
  return (
    <section className="otherBanner-section">
      <div className="overlay-blur"></div>
      <div className="content">
        <h1>Discover Mobility Scooters</h1>
        <p>Check out our latest collection of scooters.</p>
        <button className="action-btn">Explore Now</button>
      </div>
    </section>
  );
}
