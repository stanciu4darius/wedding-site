import { weddingData } from "../data/weddingData"

function LocationCard({ item }) {
  return (
    <div className="location-card fade-up">
      <div className="location-card__inner">
        <div className="location-card__top">
          <p className="section-kicker">{item.title}</p>
          <h3>{item.place}</h3>
          <p><strong>Ora:</strong> {item.time}</p>
          <p>{item.address}</p>
        </div>

        <div className="location-card__bottom">
          <a
            className="btn btn--dark"
            href={item.mapsLink}
            target="_blank"
            rel="noreferrer"
          >
            Deschide în Google Maps
          </a>
        </div>
      </div>
    </div>
  )
}

function Locations() {
  return (
    <section id="locations" className="section section--soft">
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