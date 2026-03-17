import { weddingData } from "../data/weddingData"

function Intro() {
  return (
    <section className="section section--soft">
      <div className="container narrow fade-up">
        <p className="quote">{weddingData.intro.verse}</p>
        <p className="intro-text">{weddingData.intro.invitationText}</p>
      </div>
    </section>
  )
}

export default Intro