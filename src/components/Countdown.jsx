import { useEffect, useState } from "react"
import { weddingData } from "../data/weddingData"

function getTimeLeft(targetDate) {
  const difference = new Date(targetDate).getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(weddingData.eventDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(weddingData.eventDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="countdown-section">
      <div className="container">
        <div className="countdown-card fade-up">
          <p className="section-kicker">Până la ziua noastră</p>

          <div className="countdown-grid">
            <div className="countdown-item">
              <span>{timeLeft.days}</span>
              <small>Zile</small>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.hours}</span>
              <small>Ore</small>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.minutes}</span>
              <small>Minute</small>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.seconds}</span>
              <small>Secunde</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countdown