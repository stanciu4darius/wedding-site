import { weddingData } from "../data/weddingData"

function DressCode() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="dress-suggested fade-up">
          <div className="dress-suggested__content">
            <p className="section-kicker section-kicker--light">Dress code</p>
            <h2>{weddingData.dressCode.title}</h2>
            <p className="dress-suggested__text">{weddingData.dressCode.text}</p>
          </div>

          <div className="dress-suggested__imageWrap">
            <img
              src={weddingData.dressCode.image}
              alt="Dress code sugerat"
              className="dress-suggested__image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DressCode