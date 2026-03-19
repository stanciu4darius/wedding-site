import { weddingData } from "../data/weddingData"

function Schedule() {
  return (
    <section id="schedule" className="section schedule-section-invite">
      <div className="container schedule-container-narrow">
        <div className="section-heading fade-up">
          <p className="section-kicker">Programul nunții</p>
          <h2>Order of Events</h2>
        </div>

        <div className="schedule-invite-list">
          {weddingData.schedule.map((item) => (
            <article className="schedule-invite-item fade-up" key={`${item.time}-${item.title}`}>
              <img src={item.icon} alt={item.title} className="schedule-invite-icon" />

              <div className="schedule-invite-time">{item.time}</div>

              <h3 className="schedule-invite-title">{item.title}</h3>

              {item.place ? (
                <p className="schedule-invite-place">{item.place}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule