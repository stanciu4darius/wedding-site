import { weddingData } from "../data/weddingData"

function Schedule() {
  return (
    <section id="schedule" className="section">
      <div className="container">
        <div className="section-heading fade-up">
          <p className="section-kicker">Program</p>
          <h2>Programul nunții</h2>
        </div>

        <div className="timeline">
          {weddingData.schedule.map((item) => (
            <div className="timeline__item fade-up" key={`${item.time}-${item.title}`}>
              <div className="timeline__dot" />
              <div className="timeline__time">{item.time}</div>
              <div className="timeline__content">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule