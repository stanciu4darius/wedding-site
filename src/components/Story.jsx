import { weddingData } from "../data/weddingData"

function Story() {
  return (
    <section id="story" className="section">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="section-kicker">Povestea lor</p>
          <h2>{weddingData.story.title}</h2>
        </div>

        <div className="story-editorial fade-up">
          <div className="story-editorial__text">
            <p>{weddingData.story.mainText}</p>
          </div>

          <div className="story-editorial__image">
            <img src={`${import.meta.env.BASE_URL}images/couple-5.jpg`} alt="Darius și Iazmina" />
          </div>
        </div>

        <div className="story-split">
          <div className="story-card fade-up">
            <h3>Lucruri amuzante despre relația lor</h3>

            <ul className="elegant-list elegant-list--spaced">
              {weddingData.story.funnyFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <div className="story-card fade-up">
            <h3>Date importante</h3>

            <div className="milestones">
              {weddingData.story.timeline.map((item) => (
                <div className="milestone" key={item.date}>
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="numbers-card fade-up">
          <div className="numbers-card__header">
            <p className="section-kicker">Relația noastră, în numere</p>
            <h3>Little facts we love</h3>
          </div>

          <div className="numbers-grid">
            {weddingData.story.numbers.map((item) => (
              <div className="number-item" key={item.label}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story