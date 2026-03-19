import { weddingData } from "../data/weddingData"

function PhotoUpload() {
  return (
    <section className="section section--soft">
      <div className="container">
        <div className="photo-upload-card fade-up">
          <div className="photo-upload-card__content">
            <p className="section-kicker">Amintiri de la nuntă</p>
            <h2>{weddingData.uploadPhotos.title}</h2>
            <p>{weddingData.uploadPhotos.text}</p>

            <a
              href={weddingData.uploadPhotos.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn--dark"
            >
              {weddingData.uploadPhotos.buttonText}
            </a>
          </div>

          <div className="photo-upload-card__visual">
            <div className="upload-browser">
              <div className="upload-browser__top">
                <span />
                <span />
                <span />
              </div>

              <div className="upload-browser__body">
                <div className="upload-browser__icon">✦</div>
                <p>Google Photos shared album</p>
                <small>Adaugă poze și video surprinse de voi</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhotoUpload