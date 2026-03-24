import { useEffect, useMemo, useState } from "react"
import { weddingData } from "../data/weddingData"

function Hero() {
  const images = useMemo(() => weddingData.hero.heroImages, [])
  const [loaded, setLoaded] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    let isMounted = true

    const preload = async () => {
      const promises = images.map((src) => {
        return new Promise((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve(src)
          img.onerror = () => resolve(src)
        })
      })

      await Promise.all(promises)

      if (isMounted) {
        setLoaded(true)
      }
    }

    preload()

    return () => {
      isMounted = false
    }
  }, [images])

  useEffect(() => {
    if (!loaded || images.length < 2) return

    const interval = setInterval(() => {
      const upcomingIndex = (currentIndex + 1) % images.length
      setNextIndex(upcomingIndex)
      setIsFading(true)

      setTimeout(() => {
        setCurrentIndex(upcomingIndex)
        setIsFading(false)
      }, 1200)
    }, 5000)

    return () => clearInterval(interval)
  }, [loaded, currentIndex, images.length])

  function goToSlide(index) {
    if (index === currentIndex) return
    setNextIndex(index)
    setIsFading(true)

    setTimeout(() => {
      setCurrentIndex(index)
      setIsFading(false)
    }, 1200)
  }

  return (
    <section id="hero" className="hero hero--premium">
      <div
        className="hero__bg hero__bg--base"
        style={{
          backgroundImage: `url(${images[currentIndex]})`
        }}
      />

      <div
        className={`hero__bg hero__bg--next ${isFading ? "hero__bg--visible" : ""}`}
        style={{
          backgroundImage: `url(${images[nextIndex]})`
        }}
      />

      <div className="hero__overlay" />
      <div className="hero__grain" />

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
              onClick={() => goToSlide(index)}
              aria-label={`Imagine ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero