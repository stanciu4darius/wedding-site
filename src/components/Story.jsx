import { weddingData } from "../data/weddingData"

function Story() {
  return (
    <section id="story" className="section section--soft">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="section-kicker">Povestea noastră</p>
          <h2>Love story</h2>
        </div>

        <div className="story-grid">
          <div className="story-card fade-up">
            <h3>Momente importante</h3>

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

          <div className="story-card fade-up">
            <h3>Lucruri amuzante despre noi</h3>

            <ul className="elegant-list">
              {weddingData.story.funFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story