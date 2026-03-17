import { weddingData } from "../data/weddingData"

function DressCode() {
  return (
    <section className="section section--dark">
      <div className="container narrow fade-up center">
        <p className="section-kicker section-kicker--light">Punem?</p>
        <h2>{weddingData.dressCode.title}</h2>
        <p className="dress-code-text">{weddingData.dressCode.text}</p>
      </div>
    </section>
  )
}

export default DressCode