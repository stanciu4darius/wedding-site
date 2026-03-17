import { weddingData } from "../data/weddingData"

function LocationCard({ item }) {
  return (
    <div className="location-card fade-up">
      <p className="section-kicker">{item.title}</p>
      <h3>{item.place}</h3>
      <p><strong>Ora:</strong> {item.time}</p>
      <p>{item.address}</p>
      <a
        className="btn btn--dark"
        href={item.mapsLink}
        target="_blank"
        rel="noreferrer"
      >
        Deschide în Google Maps
      </a>
    </div>
  )
}

function Locations() {
  return (
    <section id="locations" className="section">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="section-kicker">Locații</p>
          <h2>Unde ne vedem</h2>
        </div>

        <div className="locations-grid">
          <LocationCard item={weddingData.locations.ceremony} />
          <LocationCard item={weddingData.locations.reception} />
        </div>
      </div>
    </section>
  )
}

export default Locations