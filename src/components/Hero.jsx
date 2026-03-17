import { weddingData } from "../data/weddingData"

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />

      <div className="hero__content container fade-up">
        <p className="eyebrow">{weddingData.hero.subtitle}</p>
        <h1 className="hero__title">{weddingData.hero.title}</h1>
        <p className="hero__meta">{weddingData.hero.dateLabel}</p>
        <p className="hero__meta hero__meta--muted">{weddingData.hero.locationLabel}</p>

        <div className="hero__actions">
          <a href="#rsvp" className="btn btn--light">Confirmă prezența</a>
          <a href="#locations" className="btn btn--ghost">Vezi locațiile</a>
        </div>
      </div>
    </section>
  )
}

export default Hero