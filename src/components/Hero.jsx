import { useEffect, useState } from "react"
import { weddingData } from "../data/weddingData"

function Hero() {
  const images = weddingData.hero.heroImages
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section
      id="hero"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(7, 7, 7, 0.34), rgba(7, 7, 7, 0.48)), url(${images[currentIndex]})`
      }}
    >
      <div className="hero__overlay" />

      <div className="hero__content container fade-up">
        <p className="eyebrow">{weddingData.hero.subtitle}</p>
        <h1 className="hero__title">{weddingData.hero.title}</h1>
        <p className="hero__meta">{weddingData.hero.dateLabel}</p>
        <p className="hero__meta hero__meta--muted">{weddingData.hero.locationLabel}</p>

        <div className="hero__actions">
          <a href="#rsvp" className="btn btn--light">Confirmă prezența</a>
          <a href="#schedule" className="btn btn--ghost">Vezi programul</a>
        </div>

        <div className="hero__dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero__dot ${currentIndex === index ? "hero__dot--active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Imagine ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero