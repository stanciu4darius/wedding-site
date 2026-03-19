import { weddingData } from "../data/weddingData"

function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="section-kicker">Galerie</p>
          <h2>Câteva cadre cu mirii</h2>
        </div>

        <div className="gallery-grid gallery-grid--large">
          {weddingData.gallery.map((image, index) => (
            <div className="gallery-card fade-up" key={image}>
              <img src={image} alt={`Darius și Iazmina ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery